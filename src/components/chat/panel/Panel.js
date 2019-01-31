import React, { Component } from "react";
import "./panel.scss";
import { connect } from "react-redux";

class Panel extends Component {
  render() {
    return (
      <section className="panel">
        <div>{this.props.currentSession}</div>
        <div>{this.props.friendName}</div>
        <div>messageList</div>
        <div>
          messageSender
          <textarea />
          <button>发送</button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { currentSession: state.session.currentSession };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
