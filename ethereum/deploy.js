const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const generator = require('./build/CampaignGenerator.json');

const provider = new HDWalletProvider(
    'mechanic pear cable ship decide submit cat ten mail awake basic oval',
    'http://127.0.0.1:7545'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Wallet Addres of the Contract Owner: ', accounts[0]);

    const result = await new web3.eth.Contract(
        JSON.parse(generator.interface)
    ).deploy({
        data: generator.bytecode
    }).send({
        gas: '1000000',
        from: accounts[0]
    });

    console.log('Contact Address: ', result.options.address);
}

deploy();
