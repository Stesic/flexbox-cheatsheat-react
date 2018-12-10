import React from 'react';
import {Link} from 'react-router-dom';

const FlexContainers = () =>{
    return(
        <>
        <div className='flexContainer capitalizeText'>
        <h3>properties for flex containers</h3>
            <ul>
                <li><Link to='/flexDirection'>flow direction</Link></li>
                <li><Link to='/justifyContent'>justify content</Link></li>
                <li><Link to='/alignItems'>align items</Link></li>
                <li><Link to='/flexWrap'>flex wrap</Link></li>
                <li><Link to='/alignContent'>align content</Link></li>
            </ul>
        </div>
        </>
    )
}

export {
    FlexContainers
}