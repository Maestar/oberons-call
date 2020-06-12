import React from 'react';
import './GameButton.styles.css';

const GameButton = (props) => {
    const display = props.display;
    const setLocation = props.setLocation;
    const destination = props.destination;
    if (display === true){
    return (
        <button className="game-button" onClick={setLocation(destination)}>{props.buttonDesc}</button>
    );
    }
    else{
        return null;
    }
}

export default GameButton;