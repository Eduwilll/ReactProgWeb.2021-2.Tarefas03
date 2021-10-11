import React, { Component } from 'react';
import Aluno from './Aluno';
class Faculdade extends Component {
    render() {
        return( 
            <div>
                <h1>Quem mora na minha Garagem?</h1>
                <Aluno />
            </div>
        )
    }
}

export default Faculdade;