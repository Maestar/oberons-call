import React from 'react';
import './GameButton.styles.css';

const GameButton = (props) => {
    const display = props.display;
    const onClick = props.onClick;
    const type = props.type;
    if (display === true){
        //switch statement that accepts type and renders a button and preforms the correct onclick.
        switch(type){
            case 'location':
                return (
                    <button className="game-button" onClick={()=>onClick(props.destination)}>{props.buttonDesc}</button>
                );
            case 'currency':
                return (
                    <button className="game-button" onClick={()=>onClick(props.currencyAdd, props.amountAdd, props.currencyMinus, props.amountMinus)}>{props.buttonDesc}</button>
                );
            default:
                return null;
        }
    }
    else{
        return null;
    }
}

export default GameButton;