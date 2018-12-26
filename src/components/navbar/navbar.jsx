import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import UTILS from "../../helper/UTILS";

class Navbar extends Component {
  
  showButtonOnNavi = () => {
    const user = UTILS.GetCurrentUser();
    if (!user && !this.props.pathname.includes("login")) {
      return (
        <button
          type="button"
          className="btn btn-primary right-button"
          onClick={() => {
            this.props.loginCallback();
          }}
        >
          Log In
        </button>
      );
    }
    else {
      if (!this.props.pathname.includes("login")) {
        return (
          <span>
            <button
              type="button"
              className="btn btn-default right-button no-border"
              style={{ marginLeft: "8px" }}
              onClick={() => {
                this.props.callbackFromParent();
              }}
            >
              Log Out
          </button>
            <button
              type="button"
              className="btn btn-primary right-button"
              onClick={() => {
                this.props.mypageCallback();
              }}
            >
              Me
          </button>
          </span>
        );
      }
      else {
        return null;
      }
    }
  }



  render() {
    return (
      <div
        className="container-fluid bottom-line"
        style={{
          height: "76px",
          borderBottom: "",
          width: "100vw",
          backgroundColor: "#fff",
          alignItems: "center",
          position: "fixed",
          top: "0",
          zIndex: "1"
        }}
      >
        <div
          className="center-margin"
          style={{
            maxWidth: "1600px",
            width: "100vw",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className="row" style={{ width: "970px" }}>
            <div className="col-sm-4">
              <div style={{ maxWidth: "75%" }}>
                <Link to="/">
                  <img
                    className="fit-content"
                    src="/img/title.png"
                    alt="Forest Network"
                  />
                </Link>
              </div>
            </div>
            <div className="col-sm-4">
              <form >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search 🔎"
                />
              </form>
            </div>
            <div className="col-sm-4">
              {this.showButtonOnNavi()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
