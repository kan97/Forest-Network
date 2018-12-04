import React, { Component } from 'react';
import './home.css';

class Home extends Component {

    render() {
        return (
            <div className="container" style={{ height: "100vh", borderBottom: "", width: "100vw", backgroundColor: "#fafafa", alignItems: "center" }}>
                <div className="center-margin" style={{ width: "970px", height: "100%" }}>
                    <div className="row row-full">
                        <div style={{ height: "80px" }}></div>
                    </div>
                    <div className="row row-full">
                        <div className="col-sm-4 center-center" style={{ height: "400px" }}>
                            <div style={{ width: "60%", height: "auto" }}>
                                <img className="avatar rounded" src="https://www.muralswallpaper.com/app/uploads/aquamarine-patterned-ombre-wall-mural-square-400x400.jpg"></img>
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
                                    <button type="button" className="btn btn-default btn-edit float-left">Edit Profile
                                    </button>
                                </div>
                            </div>
                            <div className="row align-left spacing-top">
                                <div className="col-sm-3"><span className="home-number">111</span><span>Post</span></div>
                                <div className="col-sm-3"><span className="home-number">56</span><span>followers</span></div>
                                <div className="col-sm-3"><span className="home-number">98</span><span>following</span></div>
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
                </div>
            </div>
        );
    }
}

export default Home;