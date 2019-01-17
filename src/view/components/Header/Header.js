import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <header className='capitalizeText'>
            <h1><Link to='/'>flexbox properties</Link></h1>
            <p>Simple app where user can see flexbox properties and how they can be used</p>
        </header>
    )
}

export {
    Header
}