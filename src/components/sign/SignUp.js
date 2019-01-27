import React, { Component } from "react";
import "./sign.scss";
import { connect } from "react-redux";
import Tooltip from "../tooltip/Tooltip";
// import { signUping, signUpSuccess, signUpError } from "@data/actions/sign";
import { signUping, signUpSuccess, signUpError } from "../../data/actions/sign";
// import store from "../../data/createStore";


class SignUp extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showLoading: false
  //   };
  // }
  SignUp = () => {
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let nickname = this.refs.nickname.value;
    if (!username || !password || !nickname) {
      return false;
    }
    this.props.signUping();
    // this.setState({
    //   showLoading: true
    // });
    let options = {
      username: username.toLowerCase(),
      password: password,
      nickname: nickname,
      appKey: WebIM.config.appkey,
      apiUrl: WebIM.config.apiURL,
      success: () => {
        this.props.signUpSuccess();

        // this.setState({
        //   showLoading: false
        // });
        {
          Tooltip.show({ content: "注册成功", type: "success" });
        }
      },
      error: () => {
        // this.setState({
        //   showLoading: false
        // });
        this.props.signUpError();

        {
          Tooltip.show({ content: "注册失败", type: "error" });
        }
      }
    };
    conn.registerUser(options);
  };
  render() {
    return (
      <div>
        <div className="form">
          <h2>注册{this.props.signUpState}</h2>
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
            已有账户
            <i>登陆</i>
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
    signUping: signUping,
    signUpSuccess: signUpSuccess,
    signUpError: signUpError
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
