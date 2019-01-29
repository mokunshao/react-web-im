import React, { Component } from "react";
import { getToken } from "../../data/token";

class Chat extends Component {
  componentDidMount() {
    let token = getToken();
    if (!token) {
      // 项目写好后开启
      // this.props.history.push("/login");
    }
  }
  render() {
    return <div>chat</div>;
  }
}

export default Chat;
