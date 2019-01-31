import React, { Component } from "react";
import "./roster.scss";
import { showDialog } from "../dialog/Dialog";
import { Link } from "react-router-dom";

class Roster extends Component {
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
              let url = `/chat/${item.name}`;
              console.log(url);
              return (
                <Link to={url}>
                  <div className="friendItem" key="item.name">
                    <div>
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-avatar" />
                      </svg>
                    </div>
                    <div>
                      <div>{item.name}</div>
                      <div className="preview">
                        preview11111111111111111111111
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          : null}
      </section>
    );
  }
}

export default Roster;
