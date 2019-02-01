import React, { Component } from "react";
import { getToken } from "../../data/token";
import Sidebar from "./sidebar/Sidebar";
import Roster from "./roster/Roster";
import Panel from "./panel/Panel";
import "./chat.scss";
import { showDialog } from "../chat/dialog/Dialog";
import { connect } from "react-redux";
import { SET_ROSTER } from "../../data/actions/actionTypes";

class Chat extends Component {
  state = {
    roster: []
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
            this.props.setRoster(roster);
          }
        });
      },
      onRoster: roster => {
        roster = roster.filter(item => {
          return item.subscription === "both";
        });
        this.props.setRoster(roster);
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
        <Roster
          friendName={this.props.match.params.friendName}
        />
        <Panel friendName={this.props.match.params.friendName} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { roster: state.session.roster };
};

const mapDispatchToProps = dispatch => {
  return {
    setRoster: roster => {
      dispatch({ type: SET_ROSTER, payload: { roster } });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
