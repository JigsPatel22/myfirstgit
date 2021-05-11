import React, { Component } from "react";
import { Link} from "react-router-dom";
import LoginService from "./Service/LoginService";

class Header extends Component {
    render() {
        const isUserLoggedIn=LoginService.isUserLoggedIn();
        
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <p className='navbar-brand'>Employee Demo App</p>
                
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                    {!isUserLoggedIn && <li><Link className="nav-link" to="/register">Register</Link></li>}
                    {isUserLoggedIn && <li><Link className="nav-link" to="/login" onClick={LoginService.logout}>Logout</Link></li>}
                </ul>
                
                </nav>
        )
    }
}
export default Header;