import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import SignUp from "./components/sign/SignUp";
import Login from "./components/sign/Login";
import Chat from "./components/chat/Chat";
import { HashRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path={["/chat/:friendName", "/chat/"]} component={Chat} />
        </div>
      </Router>
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
