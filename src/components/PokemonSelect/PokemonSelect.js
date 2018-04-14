import React, { Component } from 'react';
import pokemonArr from '../../pokemonArr';
import Pokemon from '../Pokemon/Pokemon';
import './PokemonSelect.css';

class PokemonSelect extends Component {
    constructor() {
        super();
        this.state = {
            selected:
                { "url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png", "number": "460", "name": "Abomasnow" }
        }
        this.onChangePokemon = this.onChangePokemon.bind(this)
        this.onClickAddToMyTeam = this.onClickAddToMyTeam.bind(this)
        this.onClickAddToGarysTeam = this.onClickAddToGarysTeam.bind(this)
    }

    onChangePokemon(event){
        let pokemonId = event.target.value;
        let pokemon = pokemonArr.find(pokemon => pokemon.number == pokemonId)
        this.setState({
            selected: pokemon
        })
    }

    onClickAddToMyTeam(){
        this.props.addToMyTeam(this.state.selected)
    }

    onClickAddToGarysTeam(){
        this.props.addToGarysTeam(this.state.selected)
    }


    render() {
        const pokemonOptions = pokemonArr.map(pokemon => (
            <option value={pokemon.number} key={pokemon.number}>{pokemon.name}</option>
        ))
        return (
            <div className="PokemonSelect-container">
                <select value={this.state.selected.number} onChange={this.onChangePokemon} >
                    {pokemonOptions}
                </select>
                <button className='PokemonSelect-add-btn' onClick={this.onClickAddToMyTeam}>Add To My Team</button>
                <button className='PokemonSelect-add-btn' onClick={this.onClickAddToGarysTeam}>Add To Gary's Team</button>
                <Pokemon pokemon={this.state.selected}/>
            </div>
        );
    }
}

export default PokemonSelect;