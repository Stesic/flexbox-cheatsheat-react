import React from 'react';
import {Link} from 'react-router-dom';

const FlexContainers = () =>{
    return(
        <>
        <div className='flexContainer capitalizeText'>
        <h3>properties for flex containers</h3>
            <ul>
                <li><Link to='/flexDirection'>flow direction</Link></li>
                <li><Link to='/JustifyContent'>justify content</Link></li>
                <li><Link to='/AlignItems'>align items</Link></li>
                <li><Link to='/FlexWrap'>flex wrap</Link></li>
                <li><a>align content</a></li>
            </ul>
        </div>
        </>
    )
}

export {
    FlexContainers
}