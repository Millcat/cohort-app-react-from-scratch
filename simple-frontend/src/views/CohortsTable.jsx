import React, { Component } from 'react';
import APIHandler from "./../api/handler";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const handler = new APIHandler();
console.log("handler =>");
console.log(handler);

export default class CohortsTable extends Component {
    state = {
        cohorts: []
    }

    componentDidMount() { // fonction " do that" quand le composant est prêt (= rattaché au DOM)
        handler
            .get("/cohorts")
            .then(apiRes => {
                this.setState({ cohorts: apiRes.data })
            })
            .catch(apiErr => console.error(apiErr))
    }

    render() {
        return (
            <div>
                <h1 className="title">Manage cohorts</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>number</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!this.state.cohorts.length &&
                            <tr><td colSpan="2">no cohort yet</td></tr>
                        }

                        {this.state.cohorts.map((c, i) => (
                            <tr key={i}>
                                <td>{c._id}</td>
                                <td>{c.number}</td>
                                <td><FontAwesomeIcon icon={faTimes} /></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
