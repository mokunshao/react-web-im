import React, { Component } from "react";
import "./roster.scss";
import { showDialog } from "../dialog/Dialog";

class Roster extends Component {
  state = {
    roster: []
  };
  componentDidMount() {
    conn.listen({
      onOpened: e => {
        console.log(e);
        conn.getRoster({
          success: roster => {
            console.log(roster);
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
        console.log(roster);
        roster = roster.filter(item => {
          return item.subscription === "both";
        });
        this.setState({
          roster
        });
      },
      onPresence: e => {
        console.log(e);
        if (e.type === "subscribe") {
          showDialog({ type: 2, e });
        }
      }
    });
  }
  render() {
    return (
      <section className="roster">
        {this.state.roster.length
          ? this.state.roster.map(item => {
              return <div key="item.name">{item.name}</div>;
            })
          : null}
      </section>
    );
  }
}

export default Roster;
