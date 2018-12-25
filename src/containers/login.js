import React, { Component } from "react";
import LoginPre from "../components/login/login";
import UTILS from "../helper/UTILS";
import { Redirect } from "react-router-dom";
const { Keypair } = require('stellar-base');

class Login extends Component {
  state = {
    isLogin: false,
  };

  myCallback = key => {
    UTILS.ParseLogIn(Keypair.fromSecret(key).publicKey())
      .then(result => {
        this.setState({ isLogin: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (UTILS.ParseUserBecome()) {
      return <Redirect to="/" />
    }
    return (
      <LoginPre
        isLogin={this.state.isLogin}
        callbackFromParent={this.myCallback}
      />
    );
  }
}

export default Login;
