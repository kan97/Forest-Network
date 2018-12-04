import React, { Component } from 'react';
import './userInfo.css';

class Profile extends Component {

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
                    <div className="col-sm-9"><input type="text" class="form-control" id="name" /></div>
                </div>

                <div className="row info-form">
                    <div className="col-sm-3 info-label">Gender</div>
                    <div className="col-sm-9">
                        <select class="form-control" id="gender">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                </div>

                <div className="row info-form">
                    <div className="col-sm-3 info-label">Email</div>
                    <div className="col-sm-9"><input type="email" class="form-control" id="email" /></div>
                </div>

                <div className="row info-form">
                    <div className="col-sm-3 info-label">Phone number</div>
                    <div className="col-sm-9"><input type="text" class="form-control" id="phone" /></div>
                </div>

                <div className="row info-form">
                    <div className="col-sm-3 info-label">Address</div>
                    <div className="col-sm-9"><input type="text" class="form-control" id="address" /></div>
                </div>

                <div className="row info-form">
                    <div className="col-sm-3 info-label">Bio</div>
                    <div className="col-sm-9"><textarea class="form-control" rows="5" id="bio" /></div>
                </div>
            </div>
        );
    }
}

export default Profile;