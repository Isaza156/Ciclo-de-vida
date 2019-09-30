import React from 'react';

class Ciclo extends React.Component {
    constructor(props) { // El constructor es el primer punto de entrada en el ciclo de vida de un componente.
        super(props);

        console.log('constructor');

        this.state = {

        };
    }

    // Montar el componente
    componentDidMount(){
        console.log('componentDidMount');
    }

    // Desmontar el componente
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        return (
            <React.Fragment>
                <div>Hola Mundo</div>
            </React.Fragment>
        );
    }
}

export default Ciclo;
