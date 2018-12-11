import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { Header } from "../view/components/Header/Header";
import { Footer } from "../view/components/Footer/Footer";
import { Main } from "../view/components/Main";

import "./App.css";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
