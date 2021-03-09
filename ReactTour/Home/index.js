import React from "react";
import ReactDOM from "react-dom";

import snowladen from "./images/snowladen.jpg";
import alleppey from "./images/alleppey.png";
import waterfall from "./images/waterfall.jpg";



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { role: "guest", showGuestApp: "false", showAdminApp: "false", showCustomerApp: "false" }; // We will have "user" and "admin" roles too

    }



    // Renders component based on current state and props
    render() {
        return (
            <div>
                <div>
                    <div className="cen">
                        <p> <h2> Welcome </h2> </p>
                        <p>We make you to explore everything you wish to see in a great and affordable way. We provide the facilities you wish including food you like. We offer deals in various seasons. We would like you to check with us once about the deals and the places you wish to see.</p> 
                        <img src={waterfall} width="460" height="365" />
                        <p>Watching the nature will turn you peaceful </p>
                        <img src={snowladen} width="460" height = "460" />
                        
                        <img src={alleppey} width = "460" height = "460"/>
                        
                    </div>

                </div>
            </div>

        )
    }

}

export default Home;
