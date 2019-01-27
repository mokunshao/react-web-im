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
  return { signUpState: state.sign.signUpState };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
