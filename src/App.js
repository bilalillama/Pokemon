import React, { Component } from 'react';
import Navbar from './homeComponents/navbar';
import CardHolder from './homeComponents/cardHolder';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div style={{margin:'20px'}}>
          <h3 className=""> List ofPokemon each region has to offer </h3>
        </div>
        <CardHolder/>
      </div>
    );
  }
}

export default App;
