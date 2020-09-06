const path = require('path');
const solc = require('solc');
const filesystem = require('fs-extra');

const contractTokenSale = path.resolve(__dirname, 'contracts', 'TokenSale.sol');
const source = fs.readFileSync(contractTokenSale, 'utf8');

module.exports = solc.compile(source, 1).contracts[':TokenSale'];
