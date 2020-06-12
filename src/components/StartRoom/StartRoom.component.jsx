import React from 'react';
import Banner from '../Banner/Banner.component';
import GameButton from '../GameButton/GameButton.component';

const StartRoom = (props) => {
    //OberonRoom State using Hooks
    const [currentDialogue, setcurrentDialogue] = React.useState('');
    const [currentButtons, setCurrentButtons] = React.useState([]);
    //Props passed from from the Mother State.

    //Functions used by Oberon room

    //RENDER
    return(
        <div className="flex">
            <Banner bannerImage='/images/banner-puck.png' />
            <p className={`dialogue`}>{currentDialogue}</p>
            {currentButtons.map( (button) => <GameButton key={button.id}  handleClick={button.function} buttonDesc={button.text} /> )}
        </div>
    );
}

export default StartRoom;