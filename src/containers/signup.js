import React, { Component } from "react";
import SignupPre from "../components/login/signup";
import UTILS from "../helper/UTILS";
import { connect } from "react-redux";
const { Keypair } = require('stellar-base');

class Signup extends Component {
    state = {
        privateKey: null,
        publicKey: null
    }

    generateFunc = () => {

    }

    returnToLogin = () => {
        window.location.href = "/mypage";
    }

    render() { 
        return ( 
            <SignupPre 
                genFunc={this.generateFunc}
                returnLogin={this.returnToLogin}
                privateKey={this.state.privateKey}
                publicKey={this.state.publicKey}
            />
         );
    }
}
 
export default Signup;