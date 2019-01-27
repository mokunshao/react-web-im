import React, { Component } from "react";
import "./sign.scss";
import { connect } from "react-redux";
import Tooltip from "../tooltip/Tooltip";

class Reg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoading: false
    };
  }
  Reg = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let nickname = this.refs.nickname.value;
    if (!username || !password || !nickname) {
      return false;
    }
    // 出现loading
    this.setState({
      showLoading: true
    });
    let options = {
      username: username.toLowerCase(),
      password: password,
      nickname: nickname,
      appKey: WebIM.config.appkey,
      apiUrl: WebIM.config.apiURL,
      success: () => {
        this.setState({
          showLoading: false
        });
        {Tooltip.show({content:'注册成功',type: "success"})}
      },
      error: () => {
        this.setState({
          showLoading: false
        });
        {Tooltip.show({content:'注册失败',type: "error"})}
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
            <button onClick={this.Reg}>注册</button>
          </div>
          <p>
            已有账户
            <i>登陆</i>
          </p>
        </div>
        {this.state.showLoading ? <Loading /> : null}
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
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    one: () => {
      dispatch({ type: "REG_STATE_CHANGE", payload: 2 });
    },
    two: () => {
      dispatch({ type: "REG_STATE_CHANGE", payload: 3 });
    },
    three: () => {
      dispatch({ type: "REG_STATE_CHANGE", payload: 1 });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reg);
