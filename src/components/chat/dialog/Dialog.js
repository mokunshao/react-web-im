import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./dialog.scss";

class Dialog extends Component {
  closeDialog = () => {
    if (newDiv) {
      ReactDOM.unmountComponentAtNode(newDiv);
      newDiv.parentNode.removeChild(newDiv);
      newDiv = null;
    }
  };
  addFriend = () => {
    if (this.refs.username.value.trim()) {
      conn.subscribe({
        to: this.refs.username.value.trim(),
      });
      this.closeDialog();
    } else {
      alert("请输入用户名");
    }
  };
  acceptFriend = () => {
    conn.subscribed({
      to: this.props.e.from,
      message: "[resp:true]"
    });
    conn.subscribe({
      to: this.props.e.from,
      message: "[resp:true]"
    });
    this.closeDialog();
  };
  rejectFriend = () => {
    conn.unsubscribed({
      to: this.props.e.from,
      message: "rejectAddFriend"
    });
    this.closeDialog();
  };
  render() {
    let dialog = null;
    switch (this.props.type) {
      case 1:
        dialog = (
          <div className="dialog">
            <div className="mask" onClick={this.closeDialog} />
            <div className="dialogContent">
              <span className="cancel" onClick={this.closeDialog}>
                关闭
              </span>
              <div className="title">添加好友</div>
              <div>
                <input ref="username" type="text" placeholder="输入用户名" />
              </div>
              <div>
                <button onClick={this.addFriend}>确定</button>
              </div>
            </div>
          </div>
        );
        break;
      case 2:
        dialog = (
          <div className="dialog">
            <div className="mask" onClick={this.closeDialog} />
            <div className="dialogContent">
              <span className="cancel" onClick={this.closeDialog}>
                关闭
              </span>
              <div className="title">添加好友</div>
              <div>{this.props.e.from}请求添加好友。</div>
              <div>
                <button className="agree" onClick={this.acceptFriend}>
                  接受
                </button>
                <button onClick={this.rejectFriend}>拒绝</button>
              </div>
            </div>
          </div>
        );
        break;
      default:
        dialog = (
          <div className="dialog">
            <div className="mask" onClick={this.closeDialog} />
            <div className="dialogContent">
              <span className="cancel" onClick={this.closeDialog}>
                关闭
              </span>
              <div className="title">添加好友</div>
              <div>
                <input ref="username" type="text" placeholder="输入用户名" />
              </div>
              <div>
                <button onClick={this.addFriend}>确定</button>
              </div>
            </div>
          </div>
        );
        break;
    }
    return <div>{dialog}</div>;
  }
}

let newDiv;

export function showDialog(props) {
  newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  ReactDOM.render(<Dialog {...props} />, newDiv);
}
