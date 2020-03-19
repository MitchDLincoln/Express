import React, { Component } from "react";
import "./App.css";
import logo from "./spacex_logo_white.png";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Launches from "./components/Launches.js";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container d-flex flex-column justify-content-center text-center">
          <img src={logo} alt="SpaceX" className="rounded mx-auto d-block" />
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
