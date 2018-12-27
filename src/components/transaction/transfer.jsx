import React, { Component } from 'react';
import './transfer.css';
import '../update/updateObject.css';

class Transfer extends Component {

    submitTransfer = () => {
        const money = document.querySelector("#transferMoney").value;
        console.log(money);
        if (money && Number(money)) {
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