const BUILD_PATH = 'ethereum/build';
const CONTRACTS_PATH = 'ethereum/contracts';

const path = require('path');
const solc = require('solc');
const filesystem = require('fs-extra');

// Delete build directory
const pathBuild = path.resolve(__dirname, BUILD_PATH);
filesystem.removeSync(pathBuild);

// Build Contracts
function buildContract(filename) {
    const filePath = path.resolve(__dirname, CONTRACTS_PATH, filename);
    const fileContent = filesystem.readFileSync(filePath, 'utf8');
    const contracts = solc.compile(fileContent, 1).contracts;

    filesystem.ensureDirSync(pathBuild);

    for(let contract in contracts) {
        filesystem.outputJsonSync(
            path.resolve(pathBuild, contract.replace(':', '') + '.json'),
            contracts[contract]
        );
    }
}

buildContract('Campaign.sol');
buildContract('TokenSale.sol');
