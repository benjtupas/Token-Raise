import React, {Component} from 'react';
import Navigation from '../../components/navigation';
import {Form,Button,Message} from 'semantic-ui-react';

import generator from '../../ethereum/campaign-generator';
import web3 from '../../ethereum/web3';

class NewCampaign extends Component {

    state = {
        title: '',
        error: '',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({
            loading: true,
            error: ''
        });

        try {
            const accounts = await web3.eth.getAccounts();
            await generator.methods.create(this.state.title).send({
                from: accounts[0]
            });
        } catch(error) {
            console.log(error);
            this.setState({
                error: error.message
            })
        }

        this.setState({ loading: false });
    };

    render() {
        return (
            <Navigation>
                <h1>New Campaign</h1>

                <Form onSubmit={this.onSubmit} error={this.state.error}>
                    <Form.Field>
                        <label>Campaign Name</label>
                        <input
                            value={this.state ? this.state.title : ''}
                            onChange={
                                event => this.setState({
                                    title: event.target.value
                                })
                            }
                        />
                    </Form.Field>

                    <Message
                        header="Oops! There's something wrong!"
                        content={this.state.error}
                        error/>

                    <Button primary loading={this.state.loading}>Create</Button>
                </Form>
            </Navigation>
        );
    }
}

export default NewCampaign;
