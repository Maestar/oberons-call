import React from 'react';
import Banner from '../Banner/Banner.component';
import GameButton from '../GameButton/GameButton.component';

const PuckRoom = (props) => {
    //OberonRoom State using Hooks
    const [currentDialogue, setcurrentDialogue] = React.useState("I've come as you've called, your majesty. Is there some mischief I might make for you?");
    //Props passed from from the Mother State.
    const setTick = props.setTick;
    const setPuck = props.setPuck;
    const puckGathering = props.puckGathering;
    //Functions used by Oberon room
    const setWoodTick = () => {
        if(puckGathering !== 'wood'){
            setcurrentDialogue('My Lord would have me sing to the trees? Very well.');
            setPuck('wood');
            setTick('wood_tick', 1,'stone_tick', -1);
        }
        else{
            setcurrentDialogue('I am singing as sweetly as I can My Liege, the trees can only grow so fast!');
        }
    }
    const setStoneTick = () => {
        if(puckGathering !== 'stone'){
            setcurrentDialogue('Shall I go dancing amoungst the stones? Yes your grace.');
            setPuck('stone');
            setTick('stone_tick', 1, 'wood_tick', -1);
        }
        else{
            setcurrentDialogue('Should I dance any faster my feet might fall off! It takes time for the stone to come.');
        }
    }
    //RENDER
    return(
        <div className="flex">
            <Banner bannerImage='/images/banner-puck.png' />
            <p className={`dialogue`}>{currentDialogue}</p>
            <GameButton onClick={() => props.setLocation('OberonRoom')}  buttonDesc='Dismiss Goodfellow' display={true}/>
            <GameButton onClick={setStoneTick} buttonDesc='Summon Stone' display={true}/>
            <GameButton onClick={setWoodTick} buttonDesc='Summon Wood' display={true}/>
        </div>
    );
}

export default PuckRoom;