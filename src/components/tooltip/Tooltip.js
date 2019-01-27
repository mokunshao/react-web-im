import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Tooltip.scss";

class Tooltip extends Component {
  state = {
    me: 1233
  };
  static defaultProps = {
    time: 3000, // 三秒后消失
    type: "success",
    content: "默认消息"
  };
  render() {
    return (
      <div className="tooltip">
        <span>{this.props.content}</span>
      </div>
    );
  }
}

let d, timer;

function show(props) {
  if (d) {
    close();
  }
  if (timer) {
    clearTimeout(timer);
  }
  d = document.createElement("div");
  document.body.appendChild(d);
  ReactDOM.render(<Tooltip {...props} />, d);
  timer = setTimeout(() => {
    close();
  }, props.time || 3000);
}

function close() {
  if (d) {
    ReactDOM.unmountComponentAtNode(d);
    d.parentNode.removeChild(d);
    d = null;
  }
}

export default { show: show, close: close };
