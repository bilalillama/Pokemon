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
    const url = "https://img.pokemondb.net/sprites/black-white/normal/.png";
    const imgUrl = url.slice(0, 53) + this.props.name + url.slice(53);

    this.setState({
      name,
      imageUrl: imgUrl
    });
  }

  render(){
    return(
      <div className="card container col-6 col-md-2 pokemon-card">
        <img src={this.state.imageUrl} alt="https://img.icons8.com/metro/26/000000/recurring-appointment.png" className="card-img-top"/>
        <div className="card-body">
          <span>{this.state.name.charAt(0).toUpperCase()+this.state.name.slice(1)}</span>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
