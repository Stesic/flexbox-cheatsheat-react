import React from 'react';
import { Link } from 'react-router-dom';

const FlexItems = () => {
    return (
        <>
            <div className="flexItems capitalizeText">
                <h3>properties for flex items</h3>
                <ul>
                    <Link to='/order'> <li>Order</li></Link>
                    <Link to='/alignSelf'><li>align self</li></Link>
                    <Link to='/flexGrow'><li>flex grow</li></Link>
                    <Link to='/flexShrink'> <li>flex shrink</li></Link>
                    <Link to='/flexBasis'><li>flex basis</li></Link>
                </ul>
            </div>
        </>
    )
}

export {
    FlexItems
}