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
      <section className="roster">
        {this.state.roster.length
          ? this.state.roster.map(item => {
              let url = `/chat/${item.name}`;
              let isSelected = item.name === this.props.friendName;
              return (
                <Link to={url}>
                  <div
                    className={
                      isSelected ? "friendItem selected" : "friendItem"
                    }
                    key="item.name"
                  >
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
