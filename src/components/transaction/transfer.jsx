import React, { Component } from 'react';
import './transfer.css';
import '../update/updateObject.css';
import axios from "axios";
const { sign, encode } = require("../../lib/tx/index");

class Transfer extends Component {

    submitTransfer = () => {
        const money = document.querySelector("#transferMoney").value;
        console.log(money);
        console.log(this.props.currUser.sequence);
        
        if (money && Number(money)) {
            const tx = {
                version: 1,
                sequence: this.props.currUser.sequence + 1,
                memo: Buffer.alloc(0),
                operation: "payment",
                params: {
                  address: this.props.userInfo.username,
                  amount: Number(money)
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
                  this.props.incUserBal(money)
                this.props.incCurrUserSeq()
              })
            console.log("Success ", money);
        }
        else {
            document.getElementById("transferMoney").value = "";
        }
    }

    render() {

        return (
            <div className="container update-container">
                <div className="row update-header">Transfer</div>
                <div className="horizal-line" />
                <div className="row transfer-input">
                <form>
                    <input
                        id="transferMoney"
                        className="form-control"
                        placeholder="How much do you want to transfer?"
                        type="text"
                        min={0}
                    />
                    </form>
                </div>
                <div className="horizal-line" />
                <div className="row update-button">
                    <button type="button" className="btn btn-primary" onClick={this.submitTransfer}>
                    Submit
                    </button>
                </div>
            </div>
        );
    }
}

export default Transfer;