import React from 'react';
import StatsBar from './components/StatsBar/StatsBar.component';
import Banner from './components/Banner/Banner.component';
import GameButton from './components/GameButton/GameButton.component';

import './App.css';

class App extends React.Component {

  //move all the art into an art atlas.
  state = {
    paragraphRender: 'rendered',
    bannerRender: 'hidden',
    fadeout: '',
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
    currentDialogue: "Absent is the sound of humanity, from this tomb they've made for you. ",
    buttonText: 'Call for Puck',
    newGame: true

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

  gameStartCutscene = () => {
    let stage = 0;
    this.setState({ bannerArt:'images/banner-castle.png'});
    const intervalId = setInterval(() =>{
      switch(stage){
        case 0:
          this.setState({fadeout: 'fade-out'});
          setTimeout(() => {
            this.setState({fadeout: '', currentDialogue:'The courtyard of your prison lays silent, tonight the bells of your keepers are finally dormant.',paragraphRender:'hidden',  bannerRender: 'rendered'})
          }, 2000);
          stage++;
          break;
        case 1:
          this.setState({fadeout: 'fade-out'});
          setTimeout(() => {
            this.setState({fadeout: '', bannerArt:'images/banner-courtyard.png', paragraphRender: 'rendered', bannerRender: 'hidden'});
          }, 2000);
          stage++;
          break;
        case 2:
          this.setState({fadeout: 'fade-out'});
          setTimeout(() => {
            this.setState({fadeout: '', currentDialogue:'So long have you slumbered, O Prince of Shadow and Briar, that mankind has forgotten you...',paragraphRender: 'hidden', bannerRender: 'rendered'});
          }, 2000);
            stage++;
          break;
        case 3:
          this.setState({fadeout: 'fade-out'});
          setTimeout(() => {
            this.setState({fadeout: '', bannerArt:'images/banner-tunnel.png', paragraphRender: 'rendered', bannerRender: 'hidden'});
          }, 2000);
          stage++;
          break;
        case 4:
          this.setState({fadeout: 'fade-out'});
          setTimeout(() => {
            this.setState({fadeout: '', currentDialogue:'The Folk listen for you, Bramble Lord.',paragraphRender: 'hidden', bannerRender: 'rendered'});
          }, 2000);
          stage++;
          break;
        case 5:
          this.setState({fadeout: 'fade-out'});
          setTimeout(() => {
            this.setState({fadeout: '', bannerArt:'images/banner-oberon.png', paragraphRender: 'rendered', bannerRender: 'hidden'});
          }, 2000);
          stage++;
          break;
        case 6:
          this.setState({fadeout: 'fade-out'});
          setTimeout(() => {
            this.setState({fadeout: '', currentDialogue:'Call to them.', paragraphRender: 'hidden', bannerRender: 'rendered'});
          }, 2000);
          stage++;
          break;
        case 7:
          this.setState({fadeout: 'fade-out'});
          setTimeout(() => {
            this.setState({ fadeout: '', paragraphRender: 'rendered', bannerRender: 'hidden'});
          }, 2000);
          stage++;
          break;
        case 8:
          this.setState({fadeout: 'fade-out'});
          setTimeout( () => {
          this.setState({newGame:false,  paragraphRender: 'hidden'});
          clearInterval(intervalId);

          }, 2000);
          break;
        default:
          clearInterval(intervalId);
      }

    }, 6000);
  }

  //game loop: runs ever 1 second
  componentDidMount(){
    if(this.state.newGame === true){
    this.gameStartCutscene();
    }
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
    if(this.state.newGame === true){
      return (
        <div className="App flex-centered">
          <Banner bannerImage={this.state.bannerArt} render={this.state.bannerRender} fadeout={this.state.fadeout}/>
          <p className={`dialogue ${this.state.paragraphRender} ${this.state.fadeout}`}>{this.state.currentDialogue}</p>
        </div>
      );
    }
    else{
      return (
        <div className="App flex">
          <div className="fade-in">
          <StatsBar {...this.state}/>
          <Banner bannerImage={this.state.bannerArt} />
          <p className={`dialogue`}>{this.state.currentDialogue}</p>
          <GameButton handleClick={this.changeImage} buttonDesc={this.state.buttonText} />
          </div>
        </div>
      );
    }
  };
}

export default App;
