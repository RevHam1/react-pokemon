import React, { Component } from 'react';
import './Pokemon.css';

export default class Pokemon extends Component {

    constructor(props) {
        super(props);
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        this.state = { 
            style: { 
                background: `rgb(${red}, ${green}, ${blue})` 
            }
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.pokemon.number !== this.props.pokemon.number ){
            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            this.setState ({ 
                style: { 
                    background: `rgb(${red}, ${green}, ${blue})` 
                }
            })
        }
    }

    render() {

        return (
            <div className='pokemon_container' style={this.state.style}>
                <span className='space_between'>
                    <p>num:{this.props.pokemon.number}</p>
                </span>
                <img className='pokemon_image' src={this.props.pokemon.url} />
                <p>{this.props.pokemon.name}</p>
            </div>
        );
    }
}