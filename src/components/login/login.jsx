import React, { Component } from 'react';
import './login.css';
import PropTypes from "prop-types";

class Login extends Component {

    render() {
        return (
            <div class="container login-container">
                <div className="row login-header">
                    <img src="/img/forestnetworkshadow.png" alt="logo-img" className="login-logo" />
                    <img src="/img/title.png" alt="logo-img" className="login-title" />
                </div>
                <div className="row login-input">
                    <div className="col-sm-4" />
                    <div className="col-sm-4">
                        <input id="privateKey" type="text" className="form-control" placeholder="Input your PRIVATE KEY" />
                    </div>
                    <div className="col-sm-4" />
                </div>
                <div className="row login-submit">
                    <div className="col-sm-4" />
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-primary" onClick={() => {
                          const key = document.querySelector("#privateKey").value;
                          this.props.callbackFromParent(key);
                        }}>LOGIN</button>
                    </div>
                    <div className="col-sm-4" />

                </div>
            </div>
        );
    }
}

Login.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    callbackFromParent: PropTypes.func.isRequired
};

export default Login;