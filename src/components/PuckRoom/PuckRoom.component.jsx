import React from 'react';
import Banner from '../Banner/Banner.component';
import GameButton from '../GameButton/GameButton.component';

const PuckRoom = (props) => {
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
            <GameButton type={'location'} onClick={props.setLocation} destination={'OberonRoom'} buttonDesc='Call for Puck' display={true}/>
            <GameButton type={'currency'} onClick={props.setTick} currency={'stone_tick'} amount={1} currencyMinus={'wood_tick'} amountMinus={-1} buttonDesc='Summon Stone' display={true}/>
            <GameButton type={'currency'} onClick={props.setTick} currency={'wood_tick'} amount={1} currencyMinus={'stone_tick'} amountMinus={-1} buttonDesc='Summon Wood' display={true}/>
        </div>
    );
}

export default PuckRoom;