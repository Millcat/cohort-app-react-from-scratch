import React, { Component } from 'react'
import APIHandler from "./../api/handler";

const handler = new APIHandler();

export class CohortCreate extends Component {
    state = {
        number: null,
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        handler
            .post("/cohort", this.state)
            .then(apiRes => {
                console.log(apiRes);
            })
            .catch(apiErr => {
                console.log(apiErr);
            });
    }

    render() {
        return (
            <form
                className="form"
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            >
                <h1>Create a new cohort</h1>
                <label htmlFor="cohort" className="label">cohort number</label>
                <input type="number" className="input" name="number" />
                <button className="btn">ok</button>
            </form>
        )
    }
}

export default CohortCreate
