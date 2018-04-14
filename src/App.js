import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonSelect from './components/PokemonSelect/PokemonSelect';
import Team from './components/Team/Team';
import Module from './components/Model/Model';


class App extends Component {
  constructor() {
    super();
    this.state = {
      myTeam: [],
      garyTeam: [],
      openModule: false,
      moduleText: ''
    }
    this.addToMyTeam = this.addToMyTeam.bind(this);
    this.addToGarysTeam = this.addToGarysTeam.bind(this);
    this.removeFromMyTeam = this.removeFromMyTeam.bind(this);
    this.removeFromMyGarys = this.removeFromMyGarys.bind(this);
    this.closeModel = this.closeModel.bind(this);

  }
  
  addToMyTeam(pokemon) {
    if(this.state.myTeam.length < 7){
      this.setState({
        myTeam: [...this.state.myTeam, pokemon]
      })
    }else{
      this.setState({
        moduleText: `You can't add ${pokemon.name} to your team, because you already have 6 pokemon`,
        openModule: true
      })
    }

  }

  addToGarysTeam(pokemon){
    if(this.state.garyTeam.length < 7){
      this.setState({
        garyTeam: [...this.state.garyTeam, pokemon]
      })
    }else{
      this.setState({
        moduleText: `You can't add ${pokemon.name} to Gary's team, because you already have 6 pokemon`,
        openModule: true
      })
    }
  }

  removeFromMyTeam(index){
    let tempMyTeam = this.state.myTeam.slice();
    tempMyTeam.splice(index, 1);

    this.setState({
      myTeam: tempMyTeam
    })
  }

  removeFromMyGarys(index){
    let tempGaryTeam = this.state.garyTeam.slice();
    tempGaryTeam.splice(index, 1);

    this.setState({
      garyTeam: tempGaryTeam
    })
  }

  closeModel(){
    this.setState({
      openModule: false
    })
  }
  
  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Pokemon Stadium 3</h1>
        </header>
        <div className="App-battlefeild">
          <Team remove={this.removeFromMyTeam} team={this.state.myTeam} name='My Team'/>
          <PokemonSelect addToMyTeam={this.addToMyTeam} addToGarysTeam={this.addToGarysTeam} />
          <Team remove={this.removeFromMyGarys} team={this.state.garyTeam} name="Gary's Team"/>
        </div>
        <Module text={this.state.moduleText} open={this.state.openModule} onClose={this.closeModel}/>
      </div>
    );
  }
}

export default App;
