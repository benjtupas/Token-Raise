const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const web3 = new Web3(ganache.provider());

const compiledCampaign = require('../ethereum/build/Campaign.json');
const compiledGenerator = require('../ethereum/build/CampaignContractGenerator.json');

let accounts;
let generator;
let campaignAddress;
let campaign;

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

    await generator.methods.create().send({
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
