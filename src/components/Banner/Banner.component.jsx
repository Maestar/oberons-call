import React from 'react';

const Banner = (props) => {
    return (
        <img className={`${props.render} ${props.fadeout}`} src={props.bannerImage} alt="Banner" />
    );

}

export default Banner;