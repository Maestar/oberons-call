import React from 'react';
import Banner from '../Banner/Banner.component';
import GameButton from '../GameButton/GameButton.component';
import MASTER_BUTTONS from '../../data/oberon.data';

const OberonRoom = (props) => {
    //OberonRoom State using Hooks
    const [currentDialogue, setcurrentDialogue] = React.useState('');
    const [currentButtons, setCurrentButtons] = React.useState([]);
    //set initial state HERE:

    //Functions used by Oberon room buttons
    const changeButton = () => {
        let currentStateButtons = currentButtons;
        currentStateButtons[0] = MASTER_BUTTONS[0].call2
        //should pass some key so it knows what button to change and what button to add so that this becomes generic.
        setCurrentButtons(currentStateButtons);
    }
    //RENDER
    return(
        <div className="flex">
            <Banner bannerImage='/images/banner-oberon.png' />
            <p className={`dialogue`}>{currentDialogue}</p>
            <GameButton onClick={changeButton} buttonDesc={currentButtons[0]} display={true}/>
            <GameButton onClick={props.setLocation} destination='PuckRoom' buttonDesc='Call for Puck' display={true}/>
        </div>
    );
}

export default OberonRoom;