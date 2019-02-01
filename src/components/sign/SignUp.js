import React, { Component } from "react";
import "./sign.scss";
import { connect } from "react-redux";
import Tooltip from "../tooltip/Tooltip";
import { REG_STATE_CHANGE } from '../../data/actions/actionTypes'
import { Link } from "react-router-dom";


class SignUp extends Component {
  SignUp = () => {
    let username = this.refs.username.value.trim();
    let password = this.refs.password.value.trim();
    let nickname = this.refs.nickname.value.trim();
    if (!username || !password || !nickname) {
      Tooltip.show({ content: "账号密码昵称不能为空", type: "error" });
      return false;
    }
    this.props.signUping();
    let options = {
      username: username,
      password: password,
      nickname: nickname,
      appKey: WebIM.config.appkey,
      apiUrl: WebIM.config.apiURL,
      success: () => {
        this.props.signUpSuccess();
        Tooltip.show({ content: "注册成功", type: "success" });
      },
      error: () => {
        this.props.signUpError();
        Tooltip.show({ content: "注册失败", type: "error" });
      }
    };
    conn.registerUser(options);
  };
  render() {
    return (
      <div>
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
            <input ref="password" type="password" placeholder="密码" />
          </div>
          <div className="formRow">
            <input ref="nickname" type="text" placeholder="昵称" />
          </div>
          <div className="formRow">
            <button onClick={this.SignUp}>注册</button>
          </div>
          <p>
            已有账户？
            <Link to="/login">登录</Link>
          </p>
        </div>
        {this.props.signUpState === 1 ? <Loading /> : null}
      </div>
    );
  }
}

class Loading extends Component {
  render() {
    return <div className="loading">正在加载中</div>;
  }
}

const mapStateToProps = state => {
  return {
    signUpState: state.sign.signUpState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUping: () => {
      dispatch({ type: REG_STATE_CHANGE, payload: { signUpState: 1 } });
    },
    signUpSuccess: () => {
      dispatch({ type: REG_STATE_CHANGE, payload: { signUpState: 2 } });
    },
    signUpError: () => {
      dispatch({ type: REG_STATE_CHANGE, payload: { signUpState: 3 } });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
