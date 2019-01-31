import React, { Component } from "react";
import "./panel.scss";

class Panel extends Component {
  render() {
    return (
      <section className="panel">
        <div>{this.props.friendName}</div>
      </section>
    );
  }
}

export default Panel;
