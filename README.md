# Goals of the project:

- Create your own token based of Ethereum
- Launch your own Token Raise

# Project Guide:

1. app

- The web app for our token raise built on React and Node JS.
- This will communicate to our Ethereum Smart Contracts

2. ethereum

- This is where we code our Smart Contracts on top of Ethereum
- I use [Remix](http://remix.ethereum.org/) by Ethereum tool write and
test contracts before adding it to the project

# Steps to create app:

1. Install [NodeJS](https://nodejs.org)
2. Create your project folder and go there.
```
cd YOUR_PROJECT_FOLDER
```

3. Initialize project and install dependencies
```
npm init
npm install --save ganache-cli
npm install --save mocha
npm install --save solc
npm install --save fs-extra
npm install --save web3@1.0.0-beta.35
```

Warning: You can install all of them in one go but it would be better
to install 1 by 1 so you can easily see the logs when it raises an error
and deprecated libraries.

# Node JS Commands

1. Run locally
```
npm run start
```
2. Run test scripts
```
npm run test
```
3. Deploy
```
node deploy.js
```

# Resources and Tools

1. Udemy Course: [Ethereum and Solidity: The Complete Developer's Guide](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide)
