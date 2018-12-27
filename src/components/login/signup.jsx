import React, { Component } from 'react';
import './signup.css';
import PropTypes from "prop-types";

class Signup extends Component {
    render() {
        return (
            <div className="container signup-container">
                <div className="row signup-row">
                    <div className="col-sm-4" />
                    <div className="col-sm-2 text-14">
                        Private key:
                    </div>
                    <div id="privateKey" className="col-sm-2 text-bold">
                        {this.props.privateKey ? this.props.privateKey : "- - -"}
                    </div>
                    <div className="col-sm-4" />
                </div>

                <div className="row signup-row">
                    <div className="col-sm-4" />
                    <div className="col-sm-4" >
                        <div className="hor-line" />
                    </div>
                    <div className="col-sm-4" />
                </div>

                <div className="row signup-row">
                    <div className="col-sm-4" />
                    <div className="col-sm-2 text-14">
                        Public key:
                    </div>
                    <div id="publicKey" className="col-sm-2 text-bold">
                    {this.props.publicKey ? this.props.publicKey : "- - -"}
                    </div>
                    <div className="col-sm-4" />
                </div>

                <div className="row signup-row">
                    <div className="col-sm-4" />
                    <div className="col-sm-4" >
                        <div className="hor-line" />
                    </div>
                    <div className="col-sm-4" />
                </div>

                <div className="row signup-row">
                    <div className="col-sm-4" />
                    <div className="col-sm-4 signup-button">
                        <button type="button" className="btn btn-primary" onClick={this.props.genFunc}>
                            Generate new key
                    </button>
                    </div>
                    <div className="col-sm-4" />
                </div>

                <div className="row signup-row">
                    <div className="col-sm-4" />
                    <div className="col-sm-4 signin-button">
                        <button type="button" className="btn btn-default" onClick={this.props.returnLogin}>
                            Return to my page
                    </button>
                    </div>
                    <div className="col-sm-4" />
                </div>
            </div>
        );
    }
}

export default Signup;

Signup.propTypes = {
    genFunc: PropTypes.func.isRequired
  };