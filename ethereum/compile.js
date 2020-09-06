const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractTokenSale = path.resolve(__dirname, 'contracts', 'TokenSale.sol');
const source = fs.readFileSync(contractTokenSale, 'utf8');

module.exports = solc.compile(source, 1).contracts[':TokenSale'];
