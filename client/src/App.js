import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Componenti
import Launches from "./components/Launches.js";
import Launch from "./components/Launch.js";
//Stile ed Immagine
import logo from "./spacex_logo_white.png";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container d-flex flex-column justify-content-center text-center">
            <img src={logo} alt="SpaceX" className="rounded mx-auto d-block" />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
