import React, { Component } from "react";
import { getToken } from "../../data/token";
import Sidebar from "./sidebar/Sidebar";
import Roster from "./roster/Roster";
import Panel from "./panel/Panel";
import "./chat.scss";
import {showDialog} from '../chat/dialog/Dialog';

class Chat extends Component {
  state = {
    roster: [
      {
        jid: "asemoemo#chatdemoui_test1@easemob.com",
        name: "test1",
        subscription: "both"
      },
      {
        jid: "asemoemo#chatdemoui_test1@easemob.com",
        name: "test2",
        subscription: "both"
      }
    ]
  };
  componentDidMount() {
    let token = getToken();
    if (!token) {
      // 项目写好后开启
      // this.props.history.push("/login");
    }
    conn.listen({
      onOpened: () => {
        conn.getRoster({
          success: roster => {
            roster = roster.filter(item => {
              return item.subscription === "both";
            });
            this.setState({
              roster
            });
          }
        });
      },
      onRoster: roster => {
        roster = roster.filter(item => {
          return item.subscription === "both";
        });
        this.setState({
          roster
        });
      },
      onPresence: e => {
        if (e.type === "subscribe") {
          showDialog({ type: 2, e });
        }
      }
    });
  }
  render() {
    return (
      <div className="chat">
        <Sidebar />
        <Roster friendName={this.props.match.params.friendName} roster={this.state.roster}/>
        <Panel friendName={this.props.match.params.friendName} />
      </div>
    );
  }
}

export default Chat;
