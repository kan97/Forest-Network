import React, { Component } from 'react';
import './home.css';
import _ from 'lodash';
import Modal from 'react-responsive-modal';

import Post from '../post/post';
import { Link } from 'react-router-dom'

import PropTypes from "prop-types";
import { getFollowerList, getFollowingList } from '../../helper/helper';

class Home extends Component {
    state = {
        openFollowers: false,
        openFollowing: false,
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

    render() {
        const modalFollowers = <Modal
            center={true}
            onClose={() => { this.onCloseModal('openFollowers') }}
            open={this.state.openFollowers}
            styles={followStyles}
            showCloseIcon={false}
        >
            {getFollowerList()}
        </Modal>;

        const modalFollowing = <Modal
            center={true}
            onClose={() => { this.onCloseModal('openFollowing') }}
            open={this.state.openFollowing}
            styles={followStyles}
            showCloseIcon={false}
        >
            {getFollowingList()}
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
                                <div className="col-sm-12">

                                    <div className="home-name float-left">
                                        Kiet Tieu
                                    </div>
                                    <button type="button" className="btn btn-primary btn-follow float-left" >Follow</button>
                                    <Link to="/profile" type="button" className="btn btn-default btn-edit float-left">Edit Profile
                                    </Link>
                                </div>
                            </div>
                            <div className="row align-left spacing-top">
                                <div className="col-sm-3"><span className="home-number">111</span><span>Post</span></div>
                                <div className="col-sm-3 clickable-div" onClick={() => { this.onOpenModal('openFollowers'); }}><span className="home-number">56</span><span>followers</span></div>
                                <div className="col-sm-3 clickable-div" onClick={() => { this.onOpenModal('openFollowing'); }}><span className="home-number">98</span><span>following</span></div>
                                <div className="col-sm-3"></div>
                            </div>
                            <div className="row align-left spacing-top">
                                <div className="col-sm-12">
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
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
    postList: PropTypes.array
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