import React, { Component } from 'react';

class PokemonCard extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      imageUrl: ''
    }
  }

  componentDidMount(){
    const { name } = this.props;
    const url = "https://img.pokemondb.net/sprites/x-y/normal/.png";
    const imgUrl = url.slice(0, 45) + this.props.name + url.slice(45);

    this.setState({
      name,
      imageUrl: imgUrl
    });
  }

  render(){
    return(
      <div className="card container col-3 pokemon-card">
        <img src={this.state.imageUrl} alt="https://img.icons8.com/metro/26/000000/recurring-appointment.png" className="card-img-top" />
        <div className="card-body">
          <h4>{this.state.name.charAt(0).toUpperCase()+this.state.name.slice(1)}</h4>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
