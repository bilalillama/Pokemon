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
      start: 152,
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

  render(){
    const start = this.state.start;
    const end = this.state.end;

    return(
      <div className="row Body">
        <div className="col-2">
          <div className="container-fluid col-6">
            <h4>Region</h4>
            <button className="btn btn-link" onClick={this.kantoClick.bind(this)}>Kanto</button>
            <button className="btn btn-link" onClick={this.johtoClick.bind(this)}>Johto</button>
            <button className="btn btn-link" onClick={this.hoennClick.bind(this)}>Hoenn</button>
          </div>
        </div>
        <div className="col-9">
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
