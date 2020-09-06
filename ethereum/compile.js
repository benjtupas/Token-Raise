const path = require('path');
const solc = require('solc');
const filesystem = require('fs-extra');

// Delete build directory
const pathBuild = path.resolve(__dirname, 'build');
filesystem.removeSync(pathBuild);

// Access contracts
//const pathTokenSale = path.resolve(__dirname, 'contracts', 'TokenSale.sol');
const pathCampaign = path.resolve(__dirname, 'contracts', 'Campaign.sol');

//const fileTokenSale = filesystem.readFileSync(pathTokenSale, 'utf8');
const fileCampaign = filesystem.readFileSync(pathCampaign, 'utf8');

//const contractTokenSale = solc.compile(fileTokenSale, 1).contracts;
const contractCampaign = solc.compile(fileCampaign, 1).contracts;

// Save compiled contracts to build directory
filesystem.ensureDirSync(pathBuild);

// for(let contract in contractTokenSale) {
//     filesystem.outputJsonSync(
//         path.resolve(pathBuild, contract + '.json'),
//         contractTokenSale[contract]
//     );
// }

for(let contract in contractCampaign) {
    filesystem.outputJsonSync(
        path.resolve(pathBuild, contract + '.json'),
        contractCampaign[contract]
    );
}
