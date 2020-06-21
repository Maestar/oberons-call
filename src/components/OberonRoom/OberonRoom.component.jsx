import React from 'react';
import Banner from '../Banner/Banner.component';
import GameButton from '../GameButton/GameButton.component';

const OberonRoom = (props) => {
    //OberonRoom State using Hooks
    const [currentDialogue, setcurrentDialogue] = React.useState('Your prison feels cold and empty, dust coats your confinement.');
    const [currentButton, setCurrentButton] = React.useState('Call them.');
    const [eventStepper, setEventStepper] = React.useState(0);
    const [bannerImage, setBannerImage] = React.useState('/images/banner-oberon.png');
    //set initial state HERE:
    //NEEDS TO BE A ONCOMPONENTDIDMOUNT USEEFFECT TO SET CURRENT BUTTON DESCRIPTION
    //Functions used by Oberon room buttons
    const spawnPuck = () => {
        switch(eventStepper){
            case 0:
                setcurrentDialogue('Your cry echos off the stones of your chamber.');
                setBannerImage('/images/banner-tunnel.png');
                setCurrentButton('Call. Them.');
                setEventStepper(eventStepper + 1);
                break;
            case 1:
                setcurrentDialogue('The courtyards hum with your summons.');
                setBannerImage('/images/banner-courtyard.png');
                setCurrentButton('Command Them.');
                setEventStepper(eventStepper + 1);
                break;
            case 2:
                setcurrentDialogue('Your clarion call rises across the kingdom.');
                setBannerImage('/images/banner-castle.png');
                props.setButtonStatus('oberon', 'event', false);
                setTimeout(()=>{
                    setcurrentDialogue("Does Robin Goodfellow's ears doth decieve? Is that Master Oberon's call amongst the leaves?");
                    props.setButtonStatus('oberon', 'puck', true);
                }, 3000);
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
            <Banner bannerImage={bannerImage} />
            <p className={`dialogue`}>{currentDialogue}</p>
            <GameButton onClick={()=> handleEvent(props.oberonStage)} buttonDesc={currentButton} display={props.buttonStatus.event}/>
            <GameButton onClick={() => props.setLocation('PuckRoom')} buttonDesc='Call for Puck' display={props.buttonStatus.puck}/>
            <GameButton buttonDesc={`Break into Workshop 50w 50s`} display={props.buttonStatus.purchaseshop}/>
            </div>
    );
}

export default OberonRoom;