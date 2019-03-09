import React, { Component } from 'react';
import Navbar from './homeComponents/navbar';
import CardHolder from './homeComponents/cardHolder';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <CardHolder/>
      </div>
    );
  }
}

export default App;
