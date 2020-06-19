import React from 'react';
import Banner from '../Banner/Banner.component';
import GameButton from '../GameButton/GameButton.component';
import MASTER_BUTTONS from '../../data/oberon.data';

const OberonRoom = (props) => {
    //OberonRoom State using Hooks
    const [currentDialogue, setcurrentDialogue] = React.useState('');
    const [currentButton, setCurrentButton] = React.useState('');
    const [eventStepper, setEventStepper] = React.useState(0);
    //set initial state HERE:
    //NEEDS TO BE A ONCOMPONENTDIDMOUNT USEEFFECT TO SET CURRENT BUTTON DESCRIPTION
    //Functions used by Oberon room buttons
    const spawnPuck = () => {
        switch(eventStepper){
            case 0:
                setcurrentDialogue('test text 2');
                setCurrentButton('click 2');
                setEventStepper(eventStepper + 1);
                break;
            default:
                return null;
        }
    }

    const handleEvent = (roomState) => {
        //based on room state (player progression) run certain event functions.
        switch(roomState){
            case 0:
                spawnPuck();
                break;
            default:
                return null;
        }
    }
    //RENDER
    return(
        <div className="flex">
            <Banner bannerImage='/images/banner-oberon.png' />
            <p className={`dialogue`}>{currentDialogue}</p>
            <GameButton onClick={()=> handleEvent(props.oberonStage)} buttonDesc={currentButton} display={props.buttonStatus.event}/>
            <GameButton onClick={() => props.setLocation('PuckRoom')} buttonDesc='Call for Puck' display={props.buttonStatus.puck}/>
        </div>
    );
}

export default OberonRoom;