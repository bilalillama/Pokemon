import React, { Component } from 'react';
import axios from 'axios';
import PokemonCard from './pokemonComponents/pokemonCard';

class CardHolder extends Component{
  constructor(props){
    super(props);
    this.state = {
      region: 'kanto',
      start: 0,
      end: 151,
      url: 'https://pokeapi.co/api/v2/pokemon/?limit=963',
      pokemon: null
    }
  }
  async componentDidMount(){
     const res = await axios.get(this.state.url);
     this.setState({
       pokemon: res.data['results']
     });
  }
  kantoClick(){
    this.setState({
      region: 'kanto',
      start: 0,
      end: 151
    });
  }
  johtoClick(){
    this.setState({
      region: 'johto',
      start: 151,
      end: 251
    });
  }
  hoennClick(){
    this.setState({
      region: 'hoenn',
      start: 251,
      end: 386
    });
  }
  sinnohClick(){
    this.setState({
      region: 'sinnoh',
      start: 386,
      end: 494
    });
  }
  unovaClick(){
    this.setState({
      region: 'unova',
      start: 494,
      end: 649
    });
  }

  render(){
    const start = this.state.start;
    const end = this.state.end;

    return(
      <div className="col">
        <div className="row">
          <div className="container-fluid">
            <h4>Regions</h4>
            <button className="btn btn-link" onClick={this.kantoClick.bind(this)}>Kanto</button>
            <span>|</span>
            <button className="btn btn-link" onClick={this.johtoClick.bind(this)}>Johto</button>
            <span>|</span>
            <button className="btn btn-link" onClick={this.hoennClick.bind(this)}>Hoenn</button>
            <span>|</span>
            <button className="btn btn-link" onClick={this.sinnohClick.bind(this)}>Sinnoh</button>
            <span>|</span>
            <button className="btn btn-link" onClick={this.unovaClick.bind(this)}>Unova</button>
          </div>
        </div>
        <div className="col-9 container">
          {this.state.pokemon ? (
            <div className="row">
              {this.state.pokemon.slice(start, end).map(pokemon => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}/>
              ))
              }
            </div>
          ) : (
            <img src="https://img.icons8.com/metro/26/000000/recurring-appointment.png" alt="" />
          )}
        </div>
      </div>
    );
  }
}

export default CardHolder;
