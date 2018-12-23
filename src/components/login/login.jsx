import React, { Component } from 'react';
import './login.css';

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
                        <input type="text" className="form-control" placeholder="Input your PRIVATE KEY"></input>
                    </div>
                    <div className="col-sm-4" />
                </div>
                <div className="row login-submit">
                    <div className="col-sm-4" />
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-primary">LOGIN</button>
                    </div>
                    <div className="col-sm-4" />

                </div>
            </div>
        );
    }
}

export default Login;