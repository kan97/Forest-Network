import React, { Component } from "react";
import SignupPre from "../components/login/signup";
import UTILS from "../helper/UTILS";
import axios from "axios";
const { sign, encode } = require("../lib/tx/index");
const { Keypair } = require('stellar-base');

class Signup extends Component {
    state = {
        privateKey: null,
        publicKey: null
    }

    generateFunc = async () => {
        const currUser = await UTILS.GetLiveCurrentUser();
        const key = Keypair.random();
        const privateKey = key.secret()
        const publicKey = key.publicKey()

        const tx = {
            version: 1,
            sequence: currUser.sequence + 1,
            memo: Buffer.alloc(0),
            operation: "create_account",
            params: {
                address: publicKey,
            }
        };
        sign(tx, localStorage.getItem("secret"));
        const etx = encode(tx).toString("base64");
        axios.post("https://komodo.forest.network/", {
            jsonrpc: "2.0",
            id: "dontcare",
            method: "broadcast_tx_commit",
            params: [`${etx}`]
        }).then(() => {
            this.setState({
                privateKey: privateKey,
                publicKey: publicKey
            });
        }).catch(err => console.log(err)
        )
    }

    returnToLogin = () => {
        window.location.href = "/mypage";
    }

    render() { 
        return ( 
            <SignupPre 
                genFunc={this.generateFunc}
                returnLogin={this.returnToLogin}
                privateKey={this.state.privateKey}
                publicKey={this.state.publicKey}
            />
         );
    }
}
 
export default Signup;