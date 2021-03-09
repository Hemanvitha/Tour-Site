import React from "react";
import ReactDOM from "react-dom";


class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { role: "aboutus", }; // We will have "user" and "admin" roles too.

    }

    // Renders component based on current state and props
    render() {
        return (
            <div  className= "cen">
                <main>
                    <p>
                        We started to implement our tour company in 2019. We gathered the imformation regarding different hill stations and waterfalls across India based on the best visits by the tourists. We have collaborated our work with the transport authorities, hotels, textile-shops and restaurants to make it easy for the tourists and also offer coupons  for the nice brands if you join with us. If you have any doubts kindly <strong>contact us 
                        <em> tour@himalaya.com</em></strong>
                    </p>
                </main>
               

            </div>

        )
    }

}

export default AboutUs;
