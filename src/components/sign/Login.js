import React, { Component } from "react";
import "./sign.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Tooltip from "../tooltip/Tooltip";
import { setToken } from "../../data/token";

class Login extends Component {
  login = () => {
    let username = this.refs.username.value.trim();
    let password = this.refs.password.value.trim();
    if (!username || !password) {
      Tooltip.show({ content: "账号密码不能为空", type: "error" });
      return false;
    }
    let options = {
      apiUrl: WebIM.config.apiURL,
      user: username,
      pwd: password,
      appKey: WebIM.config.appkey,
      success: token => {
        setToken(token);
        Tooltip.show({ content: "登录成功", type: "success" });
        this.props.history.push("/chat");
      },
      error: () => {
        Tooltip.show({ content: "登录失败", type: "error" });
      }
    };
    conn.open(options);
  };
  render() {
    return (
      <div>
        <div className="form">
          <h2>登录</h2>
          <div className="formRow">
            <input
              ref="username"
              type="text"
              autoFocus="autofocus"
              placeholder="用户名"
            />
          </div>
          <div className="formRow">
            <input ref="password" type="password" placeholder="密码" />
          </div>
          <div className="formRow">
            <button onClick={this.login}>登录</button>
          </div>
          <p>
            没有账户？<Link to="/signup">注册</Link>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
