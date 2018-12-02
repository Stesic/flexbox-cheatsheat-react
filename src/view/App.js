import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import {Header} from '../view/components/Header/Header';
import {Main} from '../view/components/Main';

import './App.css';
class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Main/>
      {/* <Switch>
          <Route path="/" component={FlexContainers} />
          <Route path="/" component={FlexItems} />
          <Route path="/flexDirection" component={FlexDirection} />
        </Switch> */}
      </>
    );
  }
}

export default App;
