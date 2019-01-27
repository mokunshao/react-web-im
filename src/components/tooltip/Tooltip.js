import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Tooltip.scss";

class Tooltip extends Component {
  static defaultProps = {
    time: 3000, // 三秒后消失
    type: "success",
    content: "默认消息"
  };
  render() {
    return (
      <div className="tooltip">
        <span className={this.props.type}>{this.props.content}</span>
      </div>
    );
  }
}

let newDiv, timer;

function show(props) {
  if (newDiv) {
    close();
  }
  if (timer) {
    clearTimeout(timer);
  }
  newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  ReactDOM.render(<Tooltip {...props} />, newDiv);
  timer = setTimeout(() => {
    close();
  }, props.time || 3000);
}

function close() {
  if (newDiv) {
    ReactDOM.unmountComponentAtNode(newDiv);
    newDiv.parentNode.removeChild(newDiv);
    newDiv = null;
  }
}

export default { show: show, close: close };
