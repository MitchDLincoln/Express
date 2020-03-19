import React, { Component } from "react";
import "./App.css";
import logo from './spacex_logo_white.png'

class App extends Component {
  render() {
    return <div className="container">
      <img src={logo} alt="SpaceX"/>
    </div>;
  }
}

export default App;
