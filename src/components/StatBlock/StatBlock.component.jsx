import React from 'react';
import './StatBlock.styles.css';

const StatBlock = (props) => {
    return (
        <div className='stat-block'>
            <img  src={props.statIcon} alt={props.statDesc} />
            <span className={`stat-number ${props.stat}`}>{props.statCount}</span>
        </div>
    );
}

export default StatBlock;