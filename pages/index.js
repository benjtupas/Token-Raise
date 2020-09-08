import React, { Component } from 'react';
import contract from '../ethereum/campaign-generator';

class Index extends Component {
    static async getInitialProps() {
        const campaigns = await contract.methods.getCampaigns().call();

        return { campaigns : campaigns };
    }

    render() {
        return <h1>Contract: {this.props.campaigns}</h1>
    }
}

export default Index
