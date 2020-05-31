import React from 'react';
import StatBlock from '../StatBlock/StatBlock.component';
import './StatsBar.styles.css';

//statblock needs the stat it is, the image and the image description
//also consider a boolean that determines if it's rendered or not.

const StatsBar = (props) => {

    return (
        <div className="stat-container">
            <StatBlock statIcon={props.woodArt} statCount={props.wood} stat='wood'/>
            <StatBlock statIcon={props.stoneArt} statCount={props.stone} stat='stone'/>
            <StatBlock statIcon={props.goldArt} statCount={props.gold} stat='gold'/>
            <StatBlock statIcon={props.glamourArt} statCount={props.glamour} stat='glamour'/>
        </div>
    );
}

export default StatsBar;