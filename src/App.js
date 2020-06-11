import React from 'react';
import StatsBar from './components/StatsBar/StatsBar.component';
import StartRoom from './components/StartRoom/StartRoom.component';
import OberonRoom from './components/OberonRoom/OberonRoom.component';
import PuckRoom from './components/PuckRoom/PuckRoom.component';

import './App.css';

class App extends React.Component {

// ###### MAIN STATE #######
// note: Room state is housed in each room.

  state = {
    'currency':{
      'gold_count' : 0,
      'gold_tick' : 0,
      'wood_count' : 0,
      'wood_tick' : 0,
      'stone_count' : 0,
      'stone_tick' : 0,
      'glamour_count' : 0,
    },
    'location' : 'StartRoom',

  };

  //##### MAIN APP FUNCTIONS #####
  //note: mostly state manipulated that are passed as props
  //i.e. currency generators and location changers.

  setLocation = (destination) => {
    this.setState({location : destination});
  }

  //currently these generators are seperate incase they need to become unique in some way.
  //I'll review turning this into a generic function when more game logic exists and I'm
  //certain these will remain similar.
  generateGold = () => {
    this.setState({'gold_count' : this.state.gold_count + this.state.gold_tick});
  }

  generateWood = () => {
    this.setState({'wood_count' : this.state.wood_count + this.state.wood_tick});
  }

  generateStone = () => {
    this.setState({'stone_count' : this.state.stone_count + this.state.wood_tick});
  }

  setGoldTick = (amount) => {
    let newTick = this.state.gold_tick + amount;
    this.setState({'gold_tick' : newTick})
  }

  setWoodTick = (amount) => {
    let newTick = this.state.wood_tick + amount;
    this.setState({'wood_tick' : newTick})
  }

  setStoneTick = (amount) => {
    let newTick = this.state.stone_tick + amount;
    this.setState({'stone_tick' : newTick})
  }

  //##### GAME LOOP #####
  componentDidMount(){
    setInterval(() => {
      this.generateGold();
      this.generateWood();
      this.generateStone();
    }, 1000);
  }


  render() {
    switch(this.state.location){
      case 'StartRoom':
        return(<div className='app'>
                  <StatsBar {...this.state}/>
                  <StartRoom setLocation={this.setLocation}/>
               </div> );
      case 'OberonRoom':
        return(<div className='app'>
                  <StatsBar {...this.state}/>
                  <OberonRoom setLocation={this.setLocation}/>
               </div> );
      case 'PuckRoom':
        return(<div className='app'>
                <StatsBar {...this.state}/>
                <PuckRoom setLocation={this.setLocation}/>
              </div>);
      default:
        return null;
    }
  };
};

export default App;
