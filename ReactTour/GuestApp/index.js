import React from "react";
import ReactDOM from "react-dom";
import "./stylesheet.css";

import snowladen from "./images/snowladen.jpg";
import alleppey from "./images/alleppey.png"
import waterfall from "./images/waterfall.jpg";
import HOME from "../HOME";
import AboutUs from "../AboutUs";
import AdminApp from "../AdminApp";
import CustomerApp from "../CustomerApp";
import Login from "../Login";
import Tour from "../Tour"


class GuestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          role: "guest",
      }; // We will have "user" and "admin" roles too.
      this.showHome = this.showHome.bind(this);
      this.showAboutUs = this.showAboutUs.bind(this);
      this.showLogin = this.showLogin.bind(this);
      this.onsuccessfulogin = this.onsuccessfulogin.bind(this);
      this.showtour = this.showtour.bind(this);
    }


    showHome(){
      this.setState({
        role: "home",
      })
    }

    showAboutUs(){
      this.setState({
        role: "aboutus",
      })
    }

    showLogin(){
      this.setState({
        role: "login",
      })
    }

    onsuccessfulogin(role, Userinfo){
      console.log("loggin");
      this.props.handleLogin(role, Userinfo);
    }

    showtour(){
      this.setState({
        role: "tour",
      })
    }

    render() {

        return (
            <div>
            <nav>
              <div className = "navbar">
                <ul>
                    <li><button><a onClick={this.showtour}>Currenttours</a></button></li>
                    <li><button><a onClick={this.showLogin}>Login</a></button></li>
                    <li><button><a onClick={this.showHome}>Home</a></button></li>
                    <li><button><a onClick={this.showAboutUs}>About us</a></button></li>
                    <li><button><a>Newsletter Signup</a></button></li>
                </ul>
                </div>
            </nav>
            {this.state.role === "home" && (
              <HOME />
            )}
            {this.state.role === "aboutus" && (
              <AboutUs />
            )}
            {this.state.role === "admin" && (
              <AdminApp />
            )}
            {this.state.role === "customer" && (
              <CustomerApp />
            )}
            {this.state.role === "login" && (
              <Login onsuccessfulogin= {this.onsuccessfulogin} />
            )}
            {this.state.role === "tour" && (
              <Tour />
            )}
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
 <img src={alleppey} width="460" height="365" />
<article>
        Lake Scenarios
    </article></main>
            
            </div>
        )
    }

}

export default GuestApp;
