import React,{ Component } from "react";
import { Redirect, Route } from "react-router";
import LoginService from "./Service/LoginService";

class Authenticate extends Component{

  componentWillMount(){
    LoginService.onLogin(sessionStorage.getItem('token'));
 }

render(){
    if(LoginService.isUserLoggedIn()){
        return(<Route {...this.props}></Route>)
    }
    else{
        return (<Redirect to="login"></Redirect>)
    }
}
}
export default Authenticate;