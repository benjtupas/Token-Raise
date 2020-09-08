import Web3 from 'web3';
import Config from '../config.json'

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // Check Web3 wallets such as Metamask
    web3 = new Web3(window.web3.currentProvider);
} else {
    const provider = new Web3.providers.HttpProvider(Config.RPC_SERVER);
    web3 = new Web3(provider);
}

export default web3;
