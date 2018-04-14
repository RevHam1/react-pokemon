import React from 'react';
import Pokemon from './../Pokemon/Pokemon';
import './Team.css'

export default function Team(props) {
    const { name, team, remove } = props;
    const myTeam = team.map((pokemon, index) => (
        <div className="team-pokemon-container" key={index}>
            <div onClick={e=>remove(index)} className="team-pokemon-deleteButon">X</div>
            <Pokemon pokemon={pokemon} />
        </div>
    ));
    return (
        <div className="team-container">
            {name}
            {myTeam}
        </div>
    );
}