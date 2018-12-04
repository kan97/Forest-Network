import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {

    render() {
        return (
            <div className="container-fluid nav-line" style={{height: "76px", borderBottom: "", width:"100vw", backgroundColor: "#fff", alignItems:"center", position: "fixed", top: "0", zIndex: "1"}}>
                <div className="center-margin" style={{ maxWidth: "1600px", width:"100vw", height:"100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div className="row" style={{width: "970px"}}>
                        <div className="col-sm-4">
                            <div style={{maxWidth: "75%"}}>
                                <img className="fit-content" src="/img/title.png" alt="Forest Network"/>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" class="form-control" placeholder="Search 🔎"></input>
                        </div>
                        <div className="col-sm-4">
                            <button type="button" class="btn btn-default right-button no-border" style={{color: "#286090"}}>Sign Up</button>
                            <button type="button" class="btn btn-primary right-button" >Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;