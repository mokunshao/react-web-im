import React, { Component } from "react";
import "./panel.scss";
import { connect } from "react-redux";

class Panel extends Component {
  render() {
    let content = <section className="panel" />;
    this.props.roster.map(item => {
      if (item.name === this.props.currentSession) {
        content = (
          <section className="panel">
            <div className="currentSession">{this.props.currentSession}</div>
            <div className="messageList" />
            <div className="messageSender">
              <textarea placeholder="请输入消息" />
              <button>发送</button>
            </div>
          </section>
        );
        return true;
      } else {
        return false;
      }
    });
    return <>{content}</>;
  }
}

const mapStateToProps = state => {
  return {
    currentSession: state.session.currentSession,
    roster: state.session.roster
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
