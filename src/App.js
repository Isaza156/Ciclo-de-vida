import React from 'react';
import Ciclo from './Ciclo';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      montar: true
    };
  }

  render() {
    const { montar } = this.state;
    return (
      <React.Fragment>
        {montar &&
          <Ciclo />
        }
        <button
          onClick={() => this.setState({ montar: !montar })}
        >
          toggle montar
                </button>
      </React.Fragment>
    );
  }
}

export default App;
