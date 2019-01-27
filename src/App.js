import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import SignUp from "./components/sign/SignUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { signState: state.sign.signState };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
