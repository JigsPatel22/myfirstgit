import React, { Component } from "react";
import { Route,BrowserRouter as Router, Switch } from "react-router-dom";
import Authenticate from "./Authenticate";
import Employee from "./Employee";
import EmployeeComp from "./EmployeeComp";
import Header from "./Header";
import Login from './login';
import Register from "./Register";

class Home extends Component{
    
    render(){

        return(
            <Router>
            <Header/>
            <center>
           <Switch>
               <Route path="/" exact component={Login}/>
               <Route path="/login" exact component={Login}/>
               <Route path="/register" exact component={Register}/>
               <Authenticate path="/employee" component={Employee}/>
               <Authenticate path="/add" component={EmployeeComp}/>
               <Authenticate path="/update/:id" component={EmployeeComp}/>
           </Switch>
           </center>
           </Router>
            );
    }
    
}
export default Home;