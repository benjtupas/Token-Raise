# Goals of the project:

- Create token based of Ethereum
- Develop token raise website

# Important Folders

1. app

- The web app for our token raise built on React and Node JS.
- This will communicate to our Ethereum Smart Contracts

2. ethereum

- This is where we code our Smart Contracts on top of Ethereum
- I use [Remix](http://remix.ethereum.org/) by Ethereum tool write and
test contracts before adding it to the project

3. test

- To automate testing using [Mocha](https://mochajs.org/)
- Compile the contracts: `node ethereum/compile.js`
- Run the tests: `npm run test`

# How to set-up the Project

1. Install [NodeJS](https://nodejs.org)
2. Create your project folder and go there. - `cd YOUR_PROJECT_FOLDER`
3. Initialize project and install dependencies

- Initialiaze - `npm init`
- Solidity - `npm install solc@0.4.25`
- Web3 - `npm install --save web3@1.0.0-beta.35`
- Ganache (test blockchain locally) - `npm install --save ganache-cli`
- Mocha (testing) - `npm install --save mocha`
- Managing filesystem - `npm install --save fs-extra`
- Truffle wallet product - `npm install --save truffle-hdwallet-provider@0.0.3`

Notes:
- You can install all of them in one go but it would be better
to install 1 by 1 so you can easily see the logs when it raises an error
and/or deprecated libraries.
- Ethereum is very unstable. Moving from 1 version to another will
break things. Use the appropriate versions.

# How to run test ethereum?

1. `node ethereum/compile.js`
2. `npm run test`

# How to deploy ethereum?

1. `node ethereum/compile.js`
1. `node ethereum/deploy.js`

# Resources to Get Started

1. [Ethereum and Solidity: The Complete Developer's Guide](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide) - Udemy Course
2. [Etherscan](https://etherscan.io) - Check Ethereum wallet and transactions

# Node JS Commands

1. Run locally - `npm run start`
2. Run test scripts - `npm run test`
3. Deploy - `node deploy.js`
