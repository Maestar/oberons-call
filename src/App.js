import React from 'react';
import StatsBar from './components/StatsBar/StatsBar.component';
import Banner from './components/Banner/Banner.component';
import GameButton from './components/GameButton/GameButton.component';

import './App.css';

class App extends React.Component {

  //move all the art into an art atlas.
  state = {
    bannerArt: 'images/banner-oberon.png',
    bannerDesc: 'Lord Oberon, sealed in his Prison.',
    gold: 102,
    goldArt: 'images/gold-icon.png',
    wood: 3000,
    woodArt: 'images/wood-icon.png',
    stone: 298,
    stoneArt: 'images/stone-icon.png',
    glamour: 3,
    glamourArt: 'images/glamour-icon.png',
    currentDialogue: 'So long have you slumbered, O Prince of Shadow and Briar, that mankind has forgotten you...',
    buttonText: 'Call for Puck',

  };

  changeImage = () => {
    let currentArt = this.state.bannerArt
    if(currentArt.includes('oberon')){
      this.setState({bannerArt: 'images/banner-puck.png',
                    currentDialogue: 'Oh, hello master. What would you have of this humble Goodfellow',
                    buttonText: 'Dismiss Him'});
    }
    else{
      this.setState({bannerArt: 'images/banner-oberon.png',
                    currentDialogue: 'So long have you slumbered, O Prince of Shadow and Briar, that mankind has forgotten you...',
                    buttonText: 'Call for Puck'});

    }
  }


  //game loop: runs ever 1 second
  componentDidMount(){
  setInterval(() => {
    //do something
  }, 1000);
}

 //need a oncomponentdidmount to load state from either cookies or localstorage
 //if that doesn't exist, continue with new game.

 //render buttons via a list in state. Check list and keys docs in react tips bookmarks.
 //need to conditionally render the number of buttons and what they do based on state.
 //maybe handle button state seperately?

  render() {
  return (
    <div className="App">
      <StatsBar {...this.state}/>
      <Banner bannerImage={this.state.bannerArt}/>
      <p className="dialogue">{this.state.currentDialogue}</p>
      <GameButton handleClick={this.changeImage} buttonDesc={this.state.buttonText}/>
    </div>
  );
  };
}

export default App;
