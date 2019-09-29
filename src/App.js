import React from 'react';
import CardContainer from './CardContainer/CardContainer';
import SearchForm from './SearchForm/SearchForm';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };
  }

  componentDidMount() {
    // fires one time and then its done
    fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
      .then(response => response.json())
      .then(data => this.setState({pokemon: data}))
      .catch(error => console.log(error))
  }

  nextPokemon = (id, e) => {
   e.preventDefault();
   fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
   .then(response => response.json())
   .then(data => this.setState({pokemon: data}))
   .catch(error => console.log(error))
  }

  render() {
    return (
      <div className='App'>
        <h1>Pokemon!</h1>
        <SearchForm nextPokemon={this.nextPokemon}/>
        <CardContainer 
          pokemon={this.state.pokemon}
          nextPokemon={this.nextPokemon}/>
      </div>
    );
  }
}

export default App;
