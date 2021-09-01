import React from "react";
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-link" to="/products">Our Products</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active" className="nav-link" to="/contact-us">Contact Us</NavLink>
                    </li>
                </ul>
                <div className="btn btn-secondary"><Link className="text-white" to="/login">Login</Link></div>
            </div>
        </nav>
    );
}

export default Navbar;