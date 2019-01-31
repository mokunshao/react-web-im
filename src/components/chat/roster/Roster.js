import React, { Component } from "react";
import "./roster.scss";
import { Link } from "react-router-dom";

class Roster extends Component {
  render() {
    return (
      <section className="roster">
        {this.props.roster.length
          ? this.props.roster.map(item => {
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
