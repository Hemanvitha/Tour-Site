import React from "react";
import ReactDOM from "react-dom";

import "./stylesheet.css";
import snowladen from "./images/snowladen.jpg";
import alleppey from "./images/alleppey.png";
import waterfall from "./images/waterfall.jpg";

class AdminApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          role: "admin"
        };
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(){
      this.props.handleLogout("admin");
    }

    render() {
        return (
            <div>
                <nav>
                <div className = "navbar">
                <ul>
                        
                        <li><button><a href="https://www.google.com">Coming Tours</a></button></li>
                        <li><button><a href="https://www.google.com">Login</a></button></li>
                        <li><button><a href="https://www.google.com">About Us</a></button></li>
                        <li><button><a href="https://www.google.com">Newsletter Signup</a></button></li>
                        <li><button><a href="https://www.google.com">Home</a></button></li>
                    </ul>
                    </div>
                </nav>

                <div>
                <div className = "cen">
    <main>
    <p>
            Ever visited a hill place? Any place can be viewed better from the top. 
            Here, you can select the hill stations you want to visit. We will guide
           to the best places based on the attributes like cost,environment etc. 
           We will provide food, accommodation from the beginning of the trip. 
           Our agents will accompany you if you want to otherwise we will 
           provide you the step by step procedure and you can follow the steps. 
           We will provide the accommodation near the place you want to visit 
           so that it will be easy to go when you wish too.

    </p>
    
    <p>
            It’s a travelling through a waterfall mountains
        
    </p>
   <img src={waterfall} width="460" height="365" />
   
<article> 
        Waterfall Mountains
</article>
<p>
        The Snow-laden mountains can be seen through a rope-way and we will offer accessories like clothes, and the hiking requirements. People can spend as long as they want and their vacation will be expanded or shortened. 

</p>
  
 <img src={snowladen} width="460" height="365" />
<article>
        Snow-Laden Mountains
   
</article>
<p>
        The mountains where you can view the lakes that flow and this trip offers you to travel in the lake through boat and in some places the accommodation will be provided in boat house and this is where you can spend your night in the lake.

</p>
 <img src={alleppey} className = "image" />
<article>
        Lake Scenarios
    </article></main>
        </div> 
                </div>
            </div>
        )
    }

}

export default AdminApp;
