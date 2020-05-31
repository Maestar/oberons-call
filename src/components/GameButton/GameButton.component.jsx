import React from 'react';
import './GameButton.styles.css';

const GameButton = (props) => {
    return (
        <button className="game-button" onClick={props.handleClick}>{props.buttonDesc}</button>
    );
}

export default GameButton;