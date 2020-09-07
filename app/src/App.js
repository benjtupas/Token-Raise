import React from 'react';
import './App.css';
import web3 from './erc-20/web3'
import tokenSale from './erc-20/token-sale';

class App extends React.Component {
  state = {
    contract: '',
    etherscan: '',
    raised: '',
    value: '',
    message: '',
    investors: []
  };

  async componentDidMount() {
    const xldWalletAddress = '0xA8f84f1E530560a9297eaF3be146a5f32fCCEc81';

    const contract = await tokenSale.options.address;
    const raised = await this.getBalanceInEther(xldWalletAddress);
    const investors = await tokenSale.methods.getInvestors().call();

    console.log(investors);

    this.setState({
      contract: contract,
      etherscan: 'https://etherscan.io/address/' + xldWalletAddress,
      raised: raised,
      investors: investors
    });
  }

  async getBalanceInEther(address) {
     const wei = await web3.eth.getBalance(address);
     return web3.utils.fromWei(wei, 'ether');
  }

  onInvest = async (event) => {
    event.preventDefault();

    this.setState({
      message: "Sending your ethers..." + " " + this.state.value
    })

    const accounts = await web3.eth.getAccounts();

    await tokenSale.methods.invest().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });

    this.setState({
      message: "Investment successful!"
    })
  }

  render() {
    return (
      <div>
        <h1>XLD Token Sale</h1>
        <p>
          Contract Address: {this.state.contract}
        </p>
        <a href={this.state.etherscan}>
          View us on Etherscan
        </a>
        <p>
          Raised: {this.state.raised}
        </p>

        <hr/>

        <form onSubmit={this.onInvest}>
          <p>Invest at least 2 ethers</p>

          <input
            value={this.state.value}
            onChange={event => this.setState({
              value: event.target.value
            })}
          />

          <br/><br/>
          <button>Invest</button>
        </form>

        <br/>

        <p>
          {this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
