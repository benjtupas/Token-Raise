const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const {interface, bytecode} = require('../compile');

let accounts;
let tokenSale;
let investors;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  tokenSale = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode})
    .send({from: accounts[0], gas: '1000000'});
})

describe('TokenSale Contract', () => {

  it('Deploys a contract', () => {
    assert.ok(tokenSale.options.address);
  });

  it('Single investor', async () => {
    await tokenSale.methods.invest().send({
      from: accounts[1],
      value: web3.utils.toWei('2', 'ether')
    });

    const investors = await tokenSale.methods.getInvestors().call({
      from: accounts[0]
    });

    assert.equal(accounts[1], investors[0]);
    assert.equal(1, investors.length);
  });

  it('Multiple investors', async () => {
    await tokenSale.methods.invest().send({
      from: accounts[1],
      value: web3.utils.toWei('2', 'ether')
    });
    await tokenSale.methods.invest().send({
      from: accounts[2],
      value: web3.utils.toWei('2', 'ether')
    });
    await tokenSale.methods.invest().send({
      from: accounts[3],
      value: web3.utils.toWei('2', 'ether')
    });

    const investors = await tokenSale.methods.getInvestors().call({
      from: accounts[0]
    });

    assert.equal(accounts[1], investors[0]);
    assert.equal(accounts[2], investors[1]);
    assert.equal(accounts[3], investors[2]);
    assert.equal(3, investors.length);
  })

  it('Check for the minimum amount', async () => {
    try {
      await tokenSale.methods.invest().send({
        from: accounts[0],
        value: web3.utils.toWei('0.9', 'ether')
      });
      assert(false);
    } catch(error) {
      assert(error);
    }
  });

  it('Check restrictions on collection', async () => {
    try {
      await tokenSale.methods.collect().send({
        from: accounts[1],
      });
      assert(false);
    } catch(error) {
      assert(error);
    }
  });

  it('Check investments', async () => {
    await tokenSale.methods.invest().send({
      from: accounts[1],
      value: web3.utils.toWei('10', 'ether')
    });;

    const balance = await web3.eth.getBalance(accounts[0]);

    assert.ok(balance > web3.utils.toWei('11', 'ether'));
  });
});
