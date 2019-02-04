import React, { Component } from "react";
import "./panel.scss";
import { connect } from "react-redux";
import Tooltip from "../../tooltip/Tooltip";
import { SEND_TEXT_MSG } from "../../../data/actions/actionTypes";
import { getToken } from "../../../data/token";

class Panel extends Component {
  sendMessage = () => {
    let token = getToken();
    let from = token ? token.user.username : "未登录";
    if (this.refs.inputMessage.value.trim()) {
      let id = conn.getUniqueId();
      let msg = new WebIM.message("txt", id);
      msg.set({
        msg: this.refs.inputMessage.value.trim(),
        to: this.props.currentSession,
        roomType: false,
        success: (id, serverMsgId) => {
          this.props.saveSentMessage2MessageList(
            serverMsgId,
            from,
            this.props.currentSession,
            this.refs.inputMessage.value.trim()
          );
          this.refs.inputMessage.value = "";
        },
        fail: () => {
          Tooltip.show({ content: "消息发送失败" });
        }
      });
      msg.body.chatType = "singleChat";
      conn.send(msg.body);
    }
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
                          <div
                            className={
                              this.props.currentSession === item.from
                                ? "messageItem"
                                : "messageItem reverse"
                            }
                            key={item.id}
                          >
                            <div>
                              <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-avatar" />
                              </svg>
                            </div>
                            <div>
                              <div className="messageAuthor">{item.from}</div>
                              <div className="messageText">{item.data}</div>
                            </div>
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
  return {
    saveSentMessage2MessageList: (id, from, to, data) => {
      dispatch({ type: SEND_TEXT_MSG, payload: { id, from, to, data } });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
