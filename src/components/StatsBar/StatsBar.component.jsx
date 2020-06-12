import React from 'react';
import StatBlock from '../StatBlock/StatBlock.component';
import './StatsBar.styles.css';

//statblock needs the stat it is, the image and the image description
//also consider a boolean that determines if it's rendered or not.

const StatsBar = (props) => {

    return (
        <div className="stat-container">
            <StatBlock statIcon={props.wood_art} statCount={props.wood_count} stat='wood'/>
            <StatBlock statIcon={props.stone_art} statCount={props.stone_count} stat='stone'/>
            <StatBlock statIcon={props.gold_art} statCount={props.gold_count} stat='gold'/>
            <StatBlock statIcon={props.glamour_art} statCount={props.glamour_count} stat='glamour'/>
        </div>
    );
}

export default StatsBar;