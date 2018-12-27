import React, { Component } from 'react';
import './transfer.css';
import '../update/updateObject.css';
import axios from "axios";
import UTILS from "../../helper/UTILS";
const { sign, encode } = require("../../lib/tx/index");

class Transfer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paymentStatus: null
        };
    }

    submitTransfer = async () => {
        const money = document.querySelector("#transferMoney").value;
        if (money && Number(money)) {
            const currUser = await UTILS.GetLiveCurrentUser();
            const tx = {
                version: 1,
                sequence: currUser.sequence + 1,
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

                this.setState({
                    paymentStatus: true
                });

                document.getElementById("transferMoney").value = "";
            }, ()=>{
                this.setState({
                    paymentStatus: false
                });

                document.getElementById("transferMoney").value = "";
            })           
        }
        else {
            document.getElementById("transferMoney").value = "";

            this.setState({
                paymentStatus: false
            });
        }
    }

    showStatus = () => {
        if (this.state.paymentStatus !== null) {
            if (this.state.paymentStatus) {
                return (
                    <div className="row">
                        
                        <div className="row notice-label success-label">
                            Transfer successfully!
                        </div>
                    </div>
                );
            }
            else {
                return (
                    <div className="row">
                        
                        <div className="row notice-label error-label">
                            Transfer failure!
                        </div>
                    </div>
                );
            }
        }
        else {
            return (
                null
            );
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
                {this.showStatus()}
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