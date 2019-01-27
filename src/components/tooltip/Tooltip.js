import React, { Component } from "react";
import "./Tooltip.scss";

class Tooltip extends Component {
  state = {
    me: 1233
  };
  static defaultProps = {
    time: 3000, // 三秒后消失
    type: "success",
    content: "dd"
  };
  render() {
    return (
      <div className="tooltip">
        <span>{this.props.content}</span>
      </div>
    );
  }
}

let d;

function show(params) {
  d = document.createElement("div");
  document.body.appendChild(d)
    
}

export default Tooltip;
