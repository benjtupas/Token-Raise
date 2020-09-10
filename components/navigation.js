import React from 'react';
import { Button, Container } from 'semantic-ui-react';
import Head from 'next/head';

export default (props) => {
    return (
        <Container>
            <Head>
                <link
                    rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css"/>
            </Head>

            <h1 style={{ marginTop: '20px'}}>Crypto Fund</h1>

            <Button content="Campaigns" primary style={{ marginRight: '10px'}}/>
            <Button content="Create Campaign" icon="add circle" primary/>

            {props.children}
        </Container>
    );
}
