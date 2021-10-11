import React, { Component } from 'react';
import Porta from './Porta';
import Janela from './Janela';
class Casa extends Component {
    render() {
        return (
            <div>
                <h1>Eu sou uma Casa</h1>
                <Janela />
                <Porta />
            </div>
        );
    }
}

export default Casa;
