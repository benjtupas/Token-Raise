import React from 'react';
import Config from '../config.json'

export default () => {
    return(
        <div>
            <h1>Hello World: {Config.MNENOMIC}</h1>
            <h1>Hello World: {Config.RPC_SERVER}</h1>
            <h1>Hello World: {Config.CONTRACT_ADDRESS}</h1>
        </div>
    );
}
