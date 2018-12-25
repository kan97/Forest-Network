import React, { Component } from "react";
import LoginPre from "../components/login/login";
import UTILS from "../helper/UTILS";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setSecret } from "../store/actions/userInfo";
const { Keypair } = require('stellar-base');

class Login extends Component {
  state = {
    isLogin: false,
  };

  myCallback = key => {
    UTILS.ParseLogIn(Keypair.fromSecret(key).publicKey())
      .then(result => {
        this.setState({ isLogin: true });
        this.props.setSecret(key)
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (UTILS.GetCurrentUser()) {
      return <Redirect to="/" />
    }
    return (
      <LoginPre
        callbackFromParent={this.myCallback}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSecret: secret => dispatch(setSecret(secret)),
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
