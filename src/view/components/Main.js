import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {Content} from './Content/Content';
import { FlexDirection } from '../pages/FlexDirection/FlexDirection.js';
import { JustifyContent } from '../pages/JustifyContent/JustifyContent.js';
import { AlignItems } from '../pages/AlignItems/AlignItems.js';
import { FlexWrap } from '../pages/FlexWrap/FlexWrap.js';
import { AlignContent } from '../pages/AlignContent/AlignContent.js';
import { Order } from '../pages/Order/Order.js';
import { AlignSelf } from '../pages/AlignSelf/AlignSelf.js';
import { FlexGrow } from '../pages/FlexGrow/FlexGrow.js';

const Main = () => {
    return (
        <>
        <Switch>
        <Route path='/flexDirection' component={FlexDirection}/>
        <Route path='/justifyContent' component={JustifyContent}/>
        <Route path='/alignItems' component={AlignItems}/>
        <Route path='/flexWrap' component={FlexWrap}/>
        <Route path='/alignContent' component={AlignContent}/>
        <Route path='/order' component={Order}/>
        <Route path='/alignSelf' component={AlignSelf}/>
        <Route path='/flexGrow' component={FlexGrow}/>
        {/* <Route path='/flexShrink' component={FlexShrink}/>
        <Route path='/flexBasis' component={FlexBasis}/>
        <Route path='/growShrinkBasis' component={GrowShrinkBasis}/> */}
        <Route path='/' component={Content}/>
        </Switch>
        </>
    )
}

export {
    Main
}