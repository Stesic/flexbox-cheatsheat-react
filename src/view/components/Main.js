import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Content} from './Content/Content';
import { FlexDirection } from '../pages/FlexDirection/FlexDirection.js';
import { JustifyContent } from '../pages/JustifyContent/JustifyContent.js';
import { AlignItems } from '../pages/AlignItems/AlignItems.js';
import { FlexWrap } from '../pages/FlexWrap/FlexWrap.js';

const Main = () => {
    return (
        <>
        <Switch>
        <Route path='/flexDirection' component={FlexDirection}/>
        <Route path='/justifyContent' component={JustifyContent}/>
        <Route path='/alignItems' component={AlignItems}/>
        <Route path='/flexWrap' component={FlexWrap}/>
        <Route path='/' component={Content}/>
        </Switch>
        </>
    )
}

export {
    Main
}