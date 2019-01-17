import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    const state = {
        homePage: true
    }
    if(window.location.pathname === '/'){
        state.homePage = true;
    }else {
        state.homePage = false;
    }
    return (
        <header className='capitalizeText'>
            <h1><Link to='/'>flexbox properties</Link></h1>
            {state.homePage? 
            <p>Simple app where user can see flexbox properties and how they can be used</p> : ""
            }
        </header>
    )
}

export {
    Header
}