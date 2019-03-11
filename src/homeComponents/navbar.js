import React, { Component } from 'react';

class Navbar extends Component{

  render(){
    return(
      <nav className="navbar fixed-top bg-light header container-fluid">
        <span className="navbar-brand">
          Pokemon
          <img src="https://img.icons8.com/color/30/000000/pokeball.png"/>
        </span>
      </nav>
    );
  }
}

export default Navbar;
