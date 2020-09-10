# Goals of the project

- Create a token based on Ethereum
- Launch a website to raise tokens

# Progress so far

1. [Sample Staking](https://github.com/benjtupas/Token-Raise/blob/master/ethereum/contracts/TokenSale.sol)
2. [Company expenses budget requests and investors can approve](https://github.com/benjtupas/Token-Raise/blob/master/ethereum/contracts/Campaign.sol)
3. Connect Ethereum Contract with React JS
4. Deploy on Google Cloud at [cryptofund.appspot.com](https://cryptofund.appspot.com)

[How Things Interact](https://docs.google.com/drawings/d/106I4V7npIZPV_vP5n-MIhq2WxkGgLYVXPYpcg0Jk25Q/edit?usp=sharing)

# Important folders

1. pages (App)

- The web app for our token raise.
- This will communicate to our Ethereum Smart Contracts.
- Main frameworks: [NodeJS](https://nodejs.org) and [ReactJS](https://reactjs.org/)
- Routing: [NextJS](https://nextjs.org)
- Design: [Semantic UI](https://react.semantic-ui.com/)

2. ethereum (Smart Contracts)

- This is where we code our Smart Contracts on top of Ethereum
- I use [Remix](http://remix.ethereum.org/) by Ethereum tool write and
test contracts before adding it to the project

3. test (Automated Testing)

- To automate testing using [Mocha](https://mochajs.org/)
- Compile the contracts: `node ethereum/compile.js`
- Run the tests: `npm run test`

# Set-up

1. Install dependencies
```
npm install
```

2. Configure Testing and Live

Deploy your own configuration by getting the Mnemonics and RPC Server links from the following providers:
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
Don't forget to run Ganache if you're testing on local.
3. Copy the Contract Address and update the `CONTRACT_ADDRESS` on `config.json`.

```
Wallet Addres of the Contract Owner:  ABC123
Contact Address:  ABC123
```

# Run the pages

```
npm run dev
```

# Set-up from Scratch

1. Install [NodeJS](https://nodejs.org)
2. Create your project folder and go there. - `cd YOUR_PROJECT_FOLDER`
3. Initialize project and install dependencies

- Initialiaze - `npm init` (Don't call this if you're just forking the project. Call this only if you're creating a project)

Ethereum
- Solidity - `npm install --save solc@0.4.25`
- Web3 - `npm install --save web3@1.0.0-beta.35`
- Ganache (test blockchain locally) - `npm install --save ganache-cli`
- Managing filesystem - `npm install --save fs-extra`
- Truffle wallet product - `npm install --save truffle-hdwallet-provider@0.0.3`

App
- React - `npm install --save react`
- NextJS (for routing) - `npm install --save next`
- [Next Route](https://github.com/fridays/next-routes) (custom routes) - `npm install --save next-routes`

- ReactDOM - `npm install --save react-dom`
- React Semantic UI - `npm install --save semantic-ui-react`

Testing
- Mocha (testing) - `npm install --save mocha`

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
