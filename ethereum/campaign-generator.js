import web3 from './web3';
import Config from '../config.json'
import CampaignGenerator from './build/CampaignGenerator.json'

const generator  = new web3.eth.Contract(
    JSON.parse(CampaignGenerator.interface),
    Config.CONTRACT_ADDRESS
);

export default generator;
