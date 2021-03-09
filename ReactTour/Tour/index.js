import React from "react";
import ReactDOM from "react-dom";

import "./stylesheet.css";
import Tour_information from "./tour.json";

class Tour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showing: "tour",
      };
    }

    render() {

        return (
          <div>
          <main><div> Tour Page </div></main>
          <div>
          
           <div className="top"><strong>Tour Information</strong></div>
           <table>
            {Tour_information.map((info_detail) => {
              return (
                <tr>
                  <td>{info_detail.name}</td>
                  <td>{info_detail.place}</td>
                  <td>{info_detail.date}</td>
                </tr>
              )
            })
          }
          </table>
          </div>
            </div>
        )
    }

}

export default Tour;
