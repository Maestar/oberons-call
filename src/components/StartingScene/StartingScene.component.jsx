import React from 'react';
import Banner from '../Banner/Banner.component';

class StartingScene extends React.Component {

    state = {
        paragraphRender: 'rendered',
        bannerRender: 'hidden',
        fadeout: '',
        currentDialogue: "Absent is the sound of humanity, from this tomb they've made for you. ",
        bannerArt: 'images/banner-oberon.png',
    }

    //props inherited things.
    setLocation = this.props.setLocation;

    //cutscene
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
              this.setState({paragraphRender: 'hidden'});
              clearInterval(intervalId);
                this.setLocation('OberonRoom');
              }, 2000);
              break;
            default:
              clearInterval(intervalId);

          }

        }, 6000);
      }

    //cutscene pacer
    componentDidMount(){
        this.gameStartCutscene();
    };

    render() {
        return (
            <div>
                <Banner bannerImage={this.state.bannerArt} render={this.state.bannerRender} fadeout={this.state.fadeout}/>
                <p className={`dialogue ${this.state.paragraphRender} ${this.state.fadeout}`}>{this.state.currentDialogue}</p>
            </div>
        );
    }
}

export default StartingScene;