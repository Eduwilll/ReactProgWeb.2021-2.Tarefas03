import React from 'react';

class Cachorro extends React.Component {
    render() {
        return <h2>Eu sou um Cachorro e meu nome é {this.props.nome}!</h2>;
    }
}
export default Cachorro;
