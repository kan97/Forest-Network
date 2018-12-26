import React, { Component } from "react";
import LoginPre from "../components/login/login";
import UTILS from "../helper/UTILS";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfo } from "../store/actions/userInfo";
const { Keypair } = require('stellar-base');

class Login extends Component {
  state = {
    isLogin: false,
  };

  myCallback = key => {
    UTILS.ParseLogIn(Keypair.fromSecret(key).publicKey())
      .then(result => {
        this.setState({ isLogin: true });
        this.props.getUserInfo(UTILS.GetCurrentUser(), key)
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const user = UTILS.GetCurrentUser();
    if (user) {
      return <Redirect to={"/mypage/"} />
    }
    return (
      <LoginPre
        callbackFromParent={this.myCallback}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getUserInfo: (user, secret) => dispatch(getUserInfo(user, secret)),
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
