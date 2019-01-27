import React, { Component } from "react";
import "./sign.scss";

// var conn = new WebIM.connection({
//   isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
//   https:
//     typeof WebIM.config.https === "boolean"
//       ? WebIM.config.https
//       : location.protocol === "https:",
//   url: WebIM.config.xmppURL,
//   heartBeatWait: WebIM.config.heartBeatWait,
//   autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
//   autoReconnectInterval: WebIM.config.autoReconnectInterval,
//   apiUrl: WebIM.config.apiURL,
//   isAutoLogin: true
// });

class SignUp extends Component {
  state = {};
  signUp = () => {
    let username = this.refs.name.value;
    let pwd = this.refs.auth.value;
    let nickname = this.refs.nickname.value;
    if (!username || !pwd) {
      return false;
    }
    //出现loading
    // this.setState({
    //     showLoading: true
    // });
    let options = {
      username: username.toLowerCase(),
      password: pwd,
      nickname: nickname,
      // appKey: WebIM.config.appkey,
      // apiUrl: WebIM.config.apiURL,
      success: function() {
        console.log("chenggong");
      },
      error: function() {
        console.log("shibai");
      }
    };
    // conn.registerUser(options);
  };
  render() {
    return (
      <div className="form">
        <h2>注册</h2>
        <div className="formRow">
          <input
            ref="username"
            type="text"
            autoFocus="autofocus"
            placeholder="用户名"
          />
        </div>
        <div className="formRow">
          <input ref="auth" type="password" placeholder="密码" />
        </div>
        <div className="formRow">
          <input ref="nickname" type="text" placeholder="昵称" />
        </div>
        <div className="formRow">
          <button onClick={this.signUp}>注册</button>
        </div>
        <p>
          已有账户
          <i>登陆</i>
        </p>
      </div>
    );
  }
}

class Loading extends Component {
  render() {
    return <div className="loading">正在加载中</div>;
  }
}

class tooltip extends Component {
  state = {};
  render() {
    return <div>tooltip</div>;
  }
}

export default SignUp;
