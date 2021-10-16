import React, { Component } from 'react';
import Aluno from './Aluno';
class Faculdade extends Component {
    render() {
        return( 
            <div>
                <h1>Quem está na Faculdade?</h1>
                <Aluno />
            </div>
        )
    }
}

export default Faculdade;
