import React from 'react';
import { Link } from 'react-router-dom';

const FlexContainers = () => {
    return (
        <>
            <div className='flexContainer capitalizeText'>
                <h3>properties for flex containers</h3>
                <ul>
                    <Link to='/flexDirection'><li>flex direction</li></Link>
                    <Link to='/justifyContent'><li>justify content</li></Link>
                    <Link to='/alignItems'><li>align items</li></Link>
                    <Link to='/flexWrap'><li>flex wrap</li></Link>
                    <Link to='/alignContent'><li>align content</li></Link>
                </ul>
            </div>
        </>
    )
}

export {
    FlexContainers
}