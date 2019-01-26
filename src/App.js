import React, { Component } from "react";
import "./App.css";
import { Provider, connect } from "react-redux";

@connect(state => ({
  signState: state.sign.signState
}))
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">nothing </div>
      </Provider>
    );
  }
}

export default App;
