import React, { Component } from "react";
import "./roster.scss";
import { showDialog } from "../dialog/Dialog";

class Roster extends Component {
  state = {
    roster: []
  };
  componentDidMount() {
    conn.listen({
      onOpened: () => {
        console.log("onopen");
        conn.getRoster({
          success: roster => {
            this.setState({
              roster
            });
          }
        });
      },
      // onRoster: () => {
      //   console.log("onroster");
      //   conn.getRoster({
      //     success: roster => {
      //       this.setState({
      //         roster
      //       });
      //     }
      //   });
      // },
      onPresence: e => {
        if (e.type === "subscribe") {
          showDialog({ type: 2 });
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
