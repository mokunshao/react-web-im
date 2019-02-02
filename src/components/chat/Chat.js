import React, { Component } from "react";
import { getToken } from "../../data/token";
import Sidebar from "./sidebar/Sidebar";
import Roster from "./roster/Roster";
import Panel from "./panel/Panel";
import "./chat.scss";
import { showDialog } from "../chat/dialog/Dialog";
import { connect } from "react-redux";
import {
  SET_ROSTER,
  SET_CURRENT_SESSION
} from "../../data/actions/actionTypes";

class Chat extends Component {
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
      },
      onTextMessage: e => {
        console.log(e.id);
        console.log(e.from);
        console.log(e.to);
        console.log(e.data);
      }
    });
    this.props.setCurrentSession(this.props.match.params.friendName);
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.friendName !== this.props.match.params.friendName
    ) {
      this.props.setCurrentSession(this.props.match.params.friendName);
    }
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.match.params.friendName !== this.props.match.params.friendName
    );
  }
  render() {
    return (
      <div className="chat">
        <Sidebar />
        <Roster key={this.props.match.params.friendName} />
        <Panel />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    roster: state.session.roster,
    currentSession: state.session.currentSession
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setRoster: roster => {
      dispatch({ type: SET_ROSTER, payload: { roster } });
    },
    setCurrentSession: currentSession => {
      dispatch({
        type: SET_CURRENT_SESSION,
        payload: { currentSession }
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
