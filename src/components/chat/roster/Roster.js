import React, { Component } from "react";
import "./roster.scss";

class Roster extends Component {
  state = {
    roster: []
  };
  componentDidMount() {
    conn.listen({
      onOpened: () => {
        //连接成功回调
        // 如果isAutoLogin设置为false，那么必须手动设置上线，否则无法收消息
        // 手动上线指的是调用conn.setPresence(); 如果conn初始化时已将isAutoLogin设置为true
        // 则无需调用conn.setPresence();
        conn.getRoster({
          success: roster => {
            this.setState({
              roster
            });
          }
        });
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
