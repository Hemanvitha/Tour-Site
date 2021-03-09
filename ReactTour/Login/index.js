import React from "react";
import ReactDOM from "react-dom";

import "./stylesheet.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          role: "guest",
          email: null,
          password: null,
      };

      this.setUsername = this.setUsername.bind(this);
      this.setPassword = this.setPassword.bind(this);
      this.loginfunc = this.loginfunc.bind(this);
    }

    setUsername(event){
      this.setState({
        email: event.target.value
      })
    }

    setPassword(event){
      this.setState({
        password: event.target.value,
      })
    }

    loginfunc() {
      console.log("first loggin");
      if("admin@gmail.org" === this.state.email)
        this.props.onsuccessfulogin("admin",{name:"hkarnatapu",netId:"ud4558"});
        else if ("cust@gmail.org" === this.state.email)
          this.props.onsuccessfulogin("customer",{name:"hkarnatapu",netId:"ud4558"});

        else{this.props.onsuccessfulogin("guest", {}); }
      }

    render() {

        return (
          <div>
          <div text-align= "center"> LOGIN PAGE </div>
          <div><form>
          Email:
            <input type="text" onChange={this.setUsername} placeholder="admin@himalaya.com"/>
            Password:
            <input type="password" onChange={this.setPassword} placeholder="password"/>
            <div className="but"><button onClick={this.loginfunc}>Login</button></div>
          </form>
            
          </div>
          </div>
        )
    }

}

export default Login;
