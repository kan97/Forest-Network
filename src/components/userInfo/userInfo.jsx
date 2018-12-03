import React, { Component } from 'react';
import './userInfo.css';

class UserInfo extends Component {

    render() {
        return (
            <div className="container info-container">
                <div className="row info-form">
                    <div className="col-sm-3">
                        <img className="info-avatar" src={this.props.userAvatar} alt={this.props.userAvatar} />
                    </div>
                    <div className="col-sm-9">
                        <button type="button" class="btn btn-primary info-choose">Choose avatar</button>
                    </div>
                </div>

                <div className="row info-form">
                    <div className="col-sm-3 info-label">Name</div>
                    <div className="col-sm-9"><input type="text" class="form-control" id="usr" /></div>
                </div>

                <div className="row info-form">
                    <div className="col-sm-3 info-label">Gender</div>
                    <div className="col-sm-9"><input type="text" class="form-control" id="usr" /></div>
                </div>

                <div className="row info-form">
                    <div className="col-sm-3 info-label">Email</div>
                    <div className="col-sm-9"><input type="text" class="form-control" id="usr" /></div>
                </div>

                <div className="row info-form">
                    <div className="col-sm-3 info-label">Phone number</div>
                    <div className="col-sm-9"><input type="text" class="form-control" id="usr" /></div>
                </div>

                <div className="row info-form">
                    <div className="col-sm-3 info-label">Address</div>
                    <div className="col-sm-9"><input type="text" class="form-control" id="usr" /></div>
                </div>
            </div>
        );
    }
}

export default UserInfo;