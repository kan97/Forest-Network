import React, { Component } from 'react';
import './home.css';
import _ from 'lodash';
import Modal from 'react-responsive-modal';

import Post from '../post/post';
import { Link } from 'react-router-dom'

import PropTypes from "prop-types";
import FollowerList from '../follower/followerList';

class Home extends Component {
    state = {
        openFollowers: false,
        openFollowing: false,
        isEditingName: false
    };

    onOpenModal = (openModal) => {
        const newState = _.clone(this.state);
        newState[openModal] = true;
        this.setState(newState);
    };

    onCloseModal = (openModal) => {
        const newState = _.clone(this.state);
        newState[openModal] = false;
        this.setState(newState);
    };

    editName = () => {
        if (this.state.isEditingName) {
            return (
                <div className="col-sm-12">
                    <div className="home-name float-left">
                        <input type="text" className="form-control" placeholder="Input your name" value={this.props.userInfo.fullName}></input>
                    </div>
                    <button type="button" className="btn btn-primary btn-follow float-left" onClick={this.editNameOnClick}>Save</button>
                    <button type="button" className="btn btn-default btn-cancel float-left" >Cancel</button>
                </div>
            );
        }
        else {
            return (
                <div className="col-sm-12">
                    <div className="home-name float-left">
                        {this.props.userInfo.fullName}
                    </div>
                    <button type="button" className="btn btn-primary btn-follow float-left" >Follow</button>
                </div>
            );
        }
    }

    editNameOnClick = () => {

    }

    render() {
        const modalFollowers = <Modal
            center={true}
            onClose={() => { this.onCloseModal('openFollowers') }}
            open={this.state.openFollowers}
            styles={followStyles}
            showCloseIcon={false}
        >
            <FollowerList title="Followers" list={this.props.followerList} />
        </Modal>;

        const modalFollowing = <Modal
            center={true}
            onClose={() => { this.onCloseModal('openFollowing') }}
            open={this.state.openFollowing}
            styles={followStyles}
            showCloseIcon={false}
        >
            <FollowerList title="Following" list={this.props.followingList} />
        </Modal>;


        return (
            <div className="container" style={{ minHeight: "100vh", borderBottom: "", width: "100vw", backgroundColor: "#fafafa", alignItems: "center" }}>
                <div className="center-margin" style={{ width: "970px", height: "100%" }}>
                    <div className="row row-full">
                        <div style={{ height: "80px" }}></div>
                    </div>
                    <div className="row row-full bottom-line">
                        <div className="col-sm-4 center-center" style={{ height: "400px" }}>
                            <div style={{ width: "60%", height: "auto" }}>
                                <img className="avatar rounded fit-content" src="https://www.muralswallpaper.com/app/uploads/aquamarine-patterned-ombre-wall-mural-square-400x400.jpg" alt="avatar"></img>
                            </div>
                        </div>
                        <div className="col-sm-8 align-left" style={{ height: "100%" }}>
                            <div className="row" style={{ marginTop: "90px" }}></div>
                            <div className="row spacing-top">
                                {this.editName()}
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <button type="button" className="btn btn-default btn-edit float-left">Edit name</button>
                                    <button type="button" className="btn btn-default btn-edit btn-edit-avat float-left">Edit avatar</button>
                                </div>
                            </div>
                            <div className="row align-left spacing-top">
                                <div className="col-sm-3"><span className="home-number">{this.props.userInfo.post}</span><span>Post</span></div>

                                <div className="col-sm-3 clickable-div" onClick={() => { this.onOpenModal('openFollowing'); }}><span className="home-number">{this.props.userInfo.following}</span><span>following</span></div>
                                <div className="col-sm-3"></div>
                            </div>
                            <div className="row align-left spacing-top">
                                <div className="col-sm-12">
                                    <span>
                                        {this.props.userInfo.bio}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {this.props.postList.map((post, index) =>
                        <Post key={index} post={post} />
                    )}

                    {modalFollowers}
                    {modalFollowing}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    userInfo: PropTypes.object,
    postList: PropTypes.array,
    followerList: PropTypes.array,
    followingList: PropTypes.array
};
const followStyles = {
    modal: {
        maxWidth: "none",
        padding: "unset",
        background: "none",
        boxShadow: "none"
    }
}
export default Home;