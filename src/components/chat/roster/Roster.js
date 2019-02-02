import React, { Component } from "react";
import "./roster.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SET_CURRENT_SESSION } from "../../../data/actions/actionTypes";

class Roster extends Component {
  render() {
    return (
      <section className="roster">
        {this.props.roster.length
          ? this.props.roster.map(item => {
              let url = `/chat/${item.name}`;
              let isSelected = item.name === this.props.currentSession;
              return (
                <Link
                  to={url}
                  key={item.name}
                  onClick={() => {
                    this.props.setCurrentSession(item.name);
                  }}
                >
                  <div
                    className={
                      isSelected ? "friendItem selected" : "friendItem"
                    }
                  >
                    <div>
                      <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-avatar" />
                      </svg>
                    </div>
                    <div>
                      <div className="username">{item.name}</div>
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

const mapStateToProps = state => {
  return {
    currentSession: state.session.currentSession,
    roster: state.session.roster
  };
};

const mapDispatchToProps = dispatch => {
  return {
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
)(Roster);
