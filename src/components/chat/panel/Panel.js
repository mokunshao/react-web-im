import React, { Component } from "react";
import "./panel.scss";
import { connect } from "react-redux";
import Tooltip from "../../tooltip/Tooltip";

class Panel extends Component {
  sendMessage = () => {
    let id = conn.getUniqueId();
    let msg = new WebIM.message("txt", id);
    msg.set({
      msg: this.refs.inputMessage.value.trim(),
      to: this.props.currentSession,
      roomType: false,
      success: () => {
        this.refs.inputMessage.value = "";
      },
      fail: () => {
        Tooltip.show({ content: "消息发送失败" });
      }
    });
    msg.body.chatType = "singleChat";
    conn.send(msg.body);
  };
  sendMessage2 = e => {
    if (e.keyCode === 13) {
      this.sendMessage();
    }
  };
  render() {
    let content = <section className="panel" />;
    this.props.roster.map(item => {
      if (item.name === this.props.currentSession) {
        content = (
          <section className="panel">
            <div className="currentSession">{this.props.currentSession}</div>
            <div className="messageList">
              <div className="messageListContent">
                {this.props.messageList[this.props.currentSession]
                  ? this.props.messageList[this.props.currentSession].map(
                      item => {
                        return (
                          <div key={item.id}>
                            {item.from}对{item.to}说:{item.data}
                          </div>
                        );
                      }
                    )
                    : null}
              </div>
            </div>
            <div className="messageSender">
              <textarea
                placeholder="请输入消息"
                ref="inputMessage"
                onKeyUp={this.sendMessage2}
              />
              <button onClick={this.sendMessage}>发送</button>
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
    roster: state.session.roster,
    messageList: state.message.messageList
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
