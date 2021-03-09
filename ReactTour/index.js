import React from "react";
import ReactDOM from "react-dom";
import  render from 'react'
import snowladen from "./images/snowladen.jpg";
import alleppey from "./images/alleppey.png";
import waterfall from "./images/waterfall.jpg";
// importing sub-apps
import GuestApp from "./GuestApp";
import CustomerApp from "./CustomerApp";
import AdminApp from "./AdminApp";

class App extends React.Component {
    constructor(props) {
        super(props);
       this.state = { role: "guest",
       showGuestApp: "false",
       showAdminApp: "false",
       showCustomerApp: "false" }; 
       this.setshowAdmin = this.setshowAdmin.bind(this);
       this.setshowCustomer = this.setshowCustomer.bind(this);
       this.handleLogin = this.handleLogin.bind(this);
       this.handleLogout =this.handleLogout.bind(this);
       // We will have "user" and "admin" roles too.
    }
    // Renders component based on current state and props

    setshowAdmin() {
        this.setState({
            role:"admin",
            showGuestApp: "false",
            ShowAdminApp:"true",
            ShowCustomerApp: "false",
        })

    }

    setshowCustomer() {
        this.setState({
            role: "customer",
            showGuestApp: "false",
            ShowAdminApp: "true",
            ShowCustomerApp: "true",
        })
    }

    handleLogin(role, Userinfo){
      if(role == "admin"){
      this.setState({
        role: "admin",
      })
    }
    else if(role == "customer"){
      this.setState({
        role: "customer",
      })
    }
    }

    handleLogout(){
      this.setState({
        role: "guest",
      })
    }
    render()
    {
        
            return (
                <div>
                <div>
                <h2>Hill View Company </h2>
                <h2>Exploring yourself with nature is the best you can giftv yourself</h2>
               <div className="but"><button onClick={this.setshowAdmin}>Admin</button></div>
               <div className="but"><button onClick={this.setshowCustomer}>Customer</button></div>
                </div>
                {this.state.role === "guest" && (
                  <GuestApp handleLogin= {this.handleLogin}/>
                )}
                {this.state.role === "customer" && (
                  <CustomerApp handleLogout={this.handleLogout}/>
                )}
                {this.state.role === "admin" && (
                  <AdminApp handleLogout= {this.handleLogout}/>
                )}
                </div>
        )
  
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

