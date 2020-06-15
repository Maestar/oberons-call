import React from 'react';
import './GameButton.styles.css';

const GameButton = (props) => {
    const display = props.display;
    if (display === true){
        return (
            <button className="game-button" onClick={props.onClick}>{props.buttonDesc}</button>
        );
    }
    else{
        return null;
    }
}

export default GameButton;