import React from 'react';
import StatsBar from './components/StatsBar/StatsBar.component';
import StartRoom from './components/StartRoom/StartRoom.component';
import OberonRoom from './components/OberonRoom/OberonRoom.component';
import PuckRoom from './components/PuckRoom/PuckRoom.component';
import StartingScene from './components/StartingScene/StartingScene.component';

import './App.css';

class App extends React.Component {

// ###### MAIN STATE #######

  state = {
      gold_count : 0,
      gold_tick : 0,
      gold_art : 'images/gold-icon.png',
      wood_count : 0,
      wood_tick : 0,
      wood_art : 'images/wood-icon.png',
      stone_count : 0,
      stone_tick : 0,
      stone_art : 'images/stone-icon.png',
      glamour_count : 0,
      glamour_art : 'images/glamour-icon.png',
      puck_gathering: '',
      oberon_stage : 0,
      location : 'OberonRoom',
      oberon_room_buttons : {
        event: true,
        puck: false,
        purchaseshop: false,
        shop: false,
        missions: false,
      },

  };

  //##### MAIN APP FUNCTIONS #####
  //note: mostly state manipulated that are passed as props
  //i.e. currency generators and location changers.


  setLocation = (destination) => {
    this.setState({location: destination});
  }

  setPuck = (currency) => {
    this.setState({puck_gathering: currency})
  }

  setButtonStatus = (room, button, flag) => {
    switch(room){
      case 'oberon':
        let buttonState = this.state.oberon_room_buttons;
        buttonState[button] = flag;
        this.setState({oberon_room_buttons : buttonState});
        break;
      default:
        break;
    }
  }

  //currently these generators are seperate incase they need to become unique in some way.
  //I'll review turning this into a generic function when more game logic exists and I'm
  //certain these will remain similar.

  generateGold = () => {
    this.setState({gold_count : this.state.gold_count + this.state.gold_tick});
  }

  generateWood = () => {
    this.setState({'wood_count' : this.state.wood_count + this.state.wood_tick});
  }

  generateStone = () => {
    this.setState({'stone_count' : this.state.stone_count + this.state.stone_tick});
  }

  setTick = (type, amount, typeMinus, amountMinus) => {
    console.log(`type: ${type}, amount: ${amount}, type2: ${typeMinus}, amount2: ${amountMinus}`)
    if(type != null){
      let newTick = this.state[type] + amount;
      console.log(newTick);
      this.setState({[type]: newTick})
    }
    if(typeMinus != null && this.state[typeMinus] > 0){
      let newTick = this.state[typeMinus] + amountMinus;
      this.setState({[typeMinus]: newTick})
    }
  }
  generateCurrency = () => {
      this.generateGold();
     this.generateWood();
      this.generateStone();
  }
  //##### GAME LOOP #####
  componentDidMount(){
    setInterval(() => {
      this.generateCurrency();
      console.log('tick!');
    }, 1000);
  }


  render() {
    switch(this.state.location){
      case 'StartRoom':
        return(<div className='App'>
                  <StartRoom setLocation={this.setLocation} />
               </div> );
      case 'StartingScene':
        return(<div className='App flex-centered'>
                  <StartingScene setLocation={this.setLocation} />
            </div>);
      case 'OberonRoom':
        return(<div className='App'>
                  <StatsBar {...this.state}/>
                  <OberonRoom setLocation={this.setLocation}
                              oberonStage={this.state.oberon_stage}
                              buttonStatus={this.state.oberon_room_buttons}
                              setButtonStatus={this.setButtonStatus}/>
               </div> );
      case 'PuckRoom':
        return(<div className='App'>
                <StatsBar {...this.state}/>
                <PuckRoom
                    setLocation={this.setLocation}
                    setTick={this.setTick}
                    setPuck={this.setPuck}
                    puckGathering={this.state.puck_gathering}/>
              </div>);
      default:
        return null;
    }
  };
};

export default App;
