import React, { Component } from "react";
import { getToken } from "../../data/token";
import Sidebar from "./sidebar/Sidebar";
import Roster from "./roster/Roster";
import Panel from "./panel/Panel";
import "./chat.scss";

class Chat extends Component {
  componentDidMount() {
    let token = getToken();
    if (!token) {
      // 项目写好后开启
      // this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div className="chat">
        <Sidebar />
        <Roster friendName={this.props.match.params.friendName} />
        <Panel friendName={this.props.match.params.friendName} />
      </div>
    );
  }
}

export default Chat;
