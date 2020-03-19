import React, { Component } from "react";
import "./App.css";
import logo from "./spacex_logo_white.png";
import ApolloClient, { from } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://locahost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
          <img src={logo} alt="SpaceX" />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
