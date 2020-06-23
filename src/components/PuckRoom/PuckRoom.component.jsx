import React from 'react';
import Banner from '../Banner/Banner.component';
import GameButton from '../GameButton/GameButton.component';

const PuckRoom = (props) => {
    //OberonRoom State using Hooks
    const [currentDialogue, setcurrentDialogue] = React.useState("I've come as you've bellowed. What do you wish of Robin Goodfellow?");
    // Talk Options: went back and forth on this being an array or an object of arrays, its an object because thats easier to read for knowing what stage of the game
    //the talk options are.
    const talkOptions = {
       0: ["Night and silence! Who is here? I am, that merry wanderer of the night!",
            "Did My Lord miss me? Sweet Puck is here to jest and make you smile.",
            "Lord, what fools these mortals be! To lock away so long the king of fae, a travesty!",
            "Are you hungry, master? The air here is thin of glamour, let us hope the forest encroachs faster.",
            "I'm sorry, this little Robin has not the strength to release you. Mayhap there are other prisoners here Puck might free, to free you?"],
    };
    //Props passed from from the Mother State.
    const oberonStage = props.oberonStage;
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

    const puckTalk = () => {
        let lines = talkOptions[oberonStage];
        if(props.workshopStatus === true){
            let lineNumber = Math.floor(Math.random() * 4);
            setcurrentDialogue(lines[lineNumber]);
        }
        else{
            let lineNumber = Math.floor(Math.random() * 5);
            if(lineNumber === 4){
                props.setWorkshopReveal();
                props.setButtonStatus('oberon', 'purchaseshop',true);
            }
            setcurrentDialogue(lines[lineNumber]);
        }

    }

    //RENDER
    return(
        <div className="flex">
            <Banner bannerImage='/images/banner-puck.png' />
            <p className={`dialogue`}>{currentDialogue}</p>
            <GameButton onClick={puckTalk} buttonDesc='Talk with Puck' display={true} />
            <GameButton onClick={() => props.setLocation('OberonRoom')}  buttonDesc='Dismiss Goodfellow' display={true}/>
            <GameButton onClick={setStoneTick} buttonDesc='Summon Stone' display={true}/>
            <GameButton onClick={setWoodTick} buttonDesc='Summon Wood' display={true}/>
        </div>
    );
}

export default PuckRoom;