import React from 'react';
import Banner from '../Banner/Banner.component';
import GameButton from '../GameButton/GameButton.component';

const StartRoom = (props) => {
    //startroom State using Hooks
    const [currentDialogue, setcurrentDialogue] = React.useState('');
    //Props passed from from the Mother State.

    //Functions used by start room
    const newGame = () => {
        props.setLocation('StartingScene');
    }

    const loadGame = () => {
        return null;
    }
    //RENDER
    return(
        <div className="flex">
            <Banner bannerImage='/images/title.png' />
            <p className={`dialogue`}>{currentDialogue}</p>
            <GameButton onClick={newGame} buttonDesc={'New Game'} display={true}/>
            <GameButton onClick={loadGame} buttonDesc={'Continue'} display={false}/>
        </div>
    );
}

export default StartRoom;