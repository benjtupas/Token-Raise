# Goals of the project

- Create a token based on Ethereum
- Launch token raise website

# Progress so Far

1. [Sample Staking](https://github.com/benjtupas/Token-Raise/blob/master/ethereum/contracts/TokenSale.sol)
2. [Company expenses budget requests and investors can approve](https://github.com/benjtupas/Token-Raise/blob/master/ethereum/contracts/Campaign.sol)
3. Connect Ethereum Contract with React JS

[How Things Interact](https://docs.google.com/drawings/d/106I4V7npIZPV_vP5n-MIhq2WxkGgLYVXPYpcg0Jk25Q/edit?usp=sharing)

# Important Folders

1. pages (App)

- The web app for our token raise.
- This will communicate to our Ethereum Smart Contracts.
- Main frameworks: [NodeJS](https://nodejs.org) and [ReactJS](https://reactjs.org/)
- Routing: [NextJS](https://nextjs.org)

2. ethereum (Contracts)

- This is where we code our Smart Contracts on top of Ethereum
- I use [Remix](http://remix.ethereum.org/) by Ethereum tool write and
test contracts before adding it to the project

3. test

- To automate testing using [Mocha](https://mochajs.org/)
- Compile the contracts: `node ethereum/compile.js`
- Run the tests: `npm run test`

# Set-up

1. Install dependencies
```
npm install
```

2. Configure Testing and Live

Deploy to your own configuration by getting the Mnemonics and RPC Server links from the following providers:
- Testing: [Ganache](https://trufflesuite.com/ganache)
- Live: [Infura](https://infura.io/)

Then, open `config.json` and update the values. I use JSON format because it's easy to use on both ReactJS and NodeJS.

Use in React JS (App):
```
import Config from '../config.json'
Config.VARIABLE
```

Use in NodeJS (Ethereum):
```
const Config = require('./config.json');
Config.VARIABLE
```

# Test and Deploy ethereum project

**A. Test**
1. `node ethereum-compile.js`
2. `npm run test`

**B. Deploy**
1. Run: `node ethereum-compile.js`
2. Run: `node ethereum-deploy.js`
3. Copy the Contract Address and update the `CONTRACT_ADDRESS` on `config.json`.

```
Wallet Addres of the Contract Owner:  0xA8f84f1E530560a9297eaF3be146a5f32fCCEc81
Contact Address:  0x67561c5B5e5A22eF92366FDDd072060F4d7CA30c
```

# Run the pages

```

```

# Set-up from Scratch

1. Install [NodeJS](https://nodejs.org)
2. Create your project folder and go there. - `cd YOUR_PROJECT_FOLDER`
3. Initialize project and install dependencies

- Initialiaze - `npm init` (Don't call this if you're just forking the project. Call this only if you're creating a project)
- Solidity - `npm install solc@0.4.25`
- Web3 - `npm install --save web3@1.0.0-beta.35`
- Ganache (test blockchain locally) - `npm install --save ganache-cli`
- Mocha (testing) - `npm install --save mocha`
- Managing filesystem - `npm install --save fs-extra`
- Truffle wallet product - `npm install --save truffle-hdwallet-provider@0.0.3`
- React - `npm install --save react`
- NextJS (for routing) - `npm install --save next`
- ReactDOM - `npm install --save react-dom`

Notes:
- You can install all of them in one go but it would be better
to install 1 by 1 so you can easily see the logs when it raises an error
and/or deprecated libraries.
- Ethereum is very unstable. Moving from 1 version to another will
break things. Use the appropriate versions.

# Important Links

1. [Ethereum and Solidity: The Complete Developer's Guide](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide) - Udemy Course
2. [Etherscan](https://etherscan.io) - Check Ethereum wallet and transactions
3. [Ethereum Studio](https://studio.ethereum.org/) - Web IDE by Ethereum
