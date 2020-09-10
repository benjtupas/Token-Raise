const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const compiledCampaign = require('../ethereum/build/Campaign.json');
const compiledGenerator = require('../ethereum/build/CampaignGenerator.json');

let accounts;
let generator;
let campaignAddress;
let campaign;

// Deploy the contract to Ganache
before(async () => {
    accounts = await web3.eth.getAccounts();

    generator = await new web3.eth.Contract(
        JSON.parse(compiledGenerator.interface)
    ).deploy({
        data: compiledGenerator.bytecode
    }).send({
        from: accounts[0],
        gas: '1000000'
    });

    await generator.methods.create("Campaign Title").send({
        from: accounts[0],
        gas: '1000000'
    });

    const addresses = await generator.methods.getCampaigns().call();
    campaignAddress = addresses[0];

    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
});

describe('Campaigns', () => {
    it('Deploy generator and campaign contract', () => {
        assert.ok(generator.options.address);
        assert.ok(campaign.options.address);
    });

    it('Check the campaign manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    it('Investors stake', async () => {
        await campaign.methods.invest().send({
            from: accounts[1],
            value: web3.utils.toWei('2', 'ether')
        });

        numberOfInvestors = await campaign.methods.numberOfInvestors().call();
        assert.equal(numberOfInvestors, 1);

        const isInvestor = await campaign.methods.investors(accounts[1]).call();
        assert(isInvestor);
    });

    it('Below minimum stake', async () => {
        try {
            await campaign.methods.invest().send({
                from: accounts[1],
                value: web3.utils.toWei('1', 'ether')
            });
            assert(false);
        } catch(error) {
            assert(error);
        }
    });

    it('Above minimum stake', async () => {
        try {
            await campaign.methods.invest().send({
                from: accounts[1],
                value: web3.utils.toWei('2', 'ether')
            });
            assert(true);
        } catch(error) {
            assert(false);
        }
    });

    it('Manager making a request', async () => {
        await campaign.methods.createRequest(
            accounts[0],
            web3.utils.toWei('2', 'ether'),
            'Facebook Marketing'
        ).send({
            from: accounts[0],
            gas: '1000000'
        });

        const request = await campaign.methods.requests(0).call();

        assert.equal('Facebook Marketing', request.description);
    });

    it('Non-manager making a request', async () => {
        try {
            await campaign.methods.createRequest(
                accounts[0],
                web3.utils.toWei('2', 'ether'),
                'Facebook Marketing'
            ).send({
                from: accounts[1],
                gas: '1000000'
            });

            assert(false);
        } catch(error) {
            assert(error);
        }
    });

    it('Request approval', async () => {
        let beginningBalance = await web3.eth.getBalance(accounts[0]);

        // Invest
        await campaign.methods.invest().send({
            from: accounts[1],
            value: web3.utils.toWei('3', 'ether')
        });

        await campaign.methods.invest().send({
            from: accounts[2],
            value: web3.utils.toWei('4', 'ether')
        });

        await campaign.methods.invest().send({
            from: accounts[3],
            value: web3.utils.toWei('5', 'ether')
        });

        await campaign.methods.invest().send({
            from: accounts[4],
            value: web3.utils.toWei('5', 'ether')
        });

        // Check investor count
        numberOfInvestors = await campaign.methods.numberOfInvestors().call();
        assert.equal(numberOfInvestors, 4);

        assert(await campaign.methods.investors(accounts[1]).call());
        assert(await campaign.methods.investors(accounts[2]).call());
        assert(await campaign.methods.investors(accounts[3]).call());
        assert(await campaign.methods.investors(accounts[4]).call());

        // Create Request
        await campaign.methods.createRequest(
            accounts[0],
            web3.utils.toWei('5', 'ether'),
            'Product Development'
        ).send({
            from: accounts[0],
            gas: '1000000'
        });

        // Need at least 3 approvals
        await campaign.methods.approveRequest(0).send({
            from: accounts[1],
            gas: '1000000'
        });

        await campaign.methods.approveRequest(0).send({
            from: accounts[2],
            gas: '1000000'
        });

        await campaign.methods.approveRequest(0).send({
            from: accounts[3],
            gas: '1000000'
        });

        // Finalize
        const finalize = await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        // Check balance
        let balance = await web3.eth.getBalance(accounts[0])
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);

        assert(beginningBalance + web3.utils.toWei('5', 'ether') > balance);
    });
});
