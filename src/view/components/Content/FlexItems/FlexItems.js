import React from 'react';
import {Link} from 'react-router-dom';

const FlexItems = ()=>{
    return (
        <>
        <div className="flexItems capitalizeText">
        <h3>properties for flex items</h3>
            <ul>
                <li><Link to='/order'>Order</Link></li>
                <li><Link to='/alignSelf'>align self</Link></li>
                <li><Link to='/flexGrow'>flex grow</Link></li>
                <li><Link to='/flexShrink'>flex shrink</Link></li>
                <li><Link to='/flexBasis'>flex basis</Link></li>
                <li><Link to='/growShrinkBasis'>grow, shrink & basis</Link></li>
            </ul>
        </div>
        </>
    )
}

export {
    FlexItems
}