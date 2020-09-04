import web3 from './web3';

// Wallet: 0xA8f84f1E530560a9297eaF3be146a5f32fCCEc81
const address = '0xb89df32b508c378158eF13E580896751bc0cb9d9';

const abi =
[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"investors","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"company","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInvestors","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"invest","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];

export default new web3.eth.Contract(abi, address);
