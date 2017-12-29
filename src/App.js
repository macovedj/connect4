import React, { Component } from 'react';

import './App.css';
import Connect4 from './containers/Connect4/Connect4';

class App extends Component {
  render() {
    return (
      <div>
        <Connect4 />
      </div>
    );
  }
}

export default App;
