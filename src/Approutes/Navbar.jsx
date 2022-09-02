import React from "react";
import { Link } from "react-router-dom";
 class Navbar extends React.Component{
    render(){
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to='/'>Tech Rookies Arena</Link>
        <div className="ml-auto">
            <ul className="navbar-nav">
            <li className="nav-list">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-list">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                <li className="nav-list">
                    <Link className="nav-link" to="/services">Services</Link>
                </li>
                <li className="nav-list">
                    <Link className="nav-link" to="/Team">Team</Link>
                </li>
                <li className="nav-list">
                    <Link className="nav-link" to="/Message">Message</Link>
                </li>
                <li className="nav-list">
                    <Link className="nav-link" to="/User">User</Link>
                </li>
                <li className="nav-list">
                    <Link className="nav-link" to="/Form">Form</Link>
                </li>
            </ul>
        </div>
    </nav>
    }
 }
 export default Navbar