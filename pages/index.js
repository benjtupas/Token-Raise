import React, { Component } from 'react';
import generator from '../ethereum/campaign-generator';
import { Card } from 'semantic-ui-react';
import Navigation from '../components/navigation';

class Index extends Component {
    static async getInitialProps() {
        const campaigns = await generator.methods.getCampaigns().call();
        return { campaigns : campaigns };
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (<a>View Campaign</a>),
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Navigation>
                <div>
                    <br/>
                    <h3>Campaigns</h3>
                    {this.renderCampaigns()}
                </div>
            </Navigation>
        );
    }
}

export default Index
