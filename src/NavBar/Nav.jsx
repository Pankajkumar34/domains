import React from 'react'
// import '../NavBar/Nav.css';
import { NavLink } from 'react-router-dom'
import logo from '../img/50.png'
function Nav() {
    return (
        <header>
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="menubar">
                    <ul>
                        <li>
                            <NavLink to="/" className="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/abut">About</NavLink>
                        </li>
                        <li><NavLink to="/domain">Domain</NavLink></li>
                        <li><NavLink to="/page">Page</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/admin">Admin</NavLink></li>
                    </ul>
                    <div className="searchbar">
                        <a><i className="fa fa-search"></i>Search</a>
                    </div>
                </div>
                <div className="toggle">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </header>
    )
}

export default Nav
