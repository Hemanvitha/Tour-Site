import React from "react";
import ReactDOM from "react-dom";

import "./stylesheet.css";


class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showing: "customers",
      };
    }

    render() {

        return (
          <div>
          <main><div> Customers Page </div></main>
          <div>
        <p>
            Customers not implemented yet
        </p>
          </div>
            </div>
        )
        }

}

export default Customers;
