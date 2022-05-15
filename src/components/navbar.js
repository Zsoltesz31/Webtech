import React, { Component } from 'react'
import './navbarstyle.css'
import { Link } from "react-router-dom";

class Navbar extends Component {


    render() {
        return (
            <ul className="navbar">
                <li><Link to="/">Posts</Link></li>
                <li><Link to="/admin">Manage posts</Link></li>


            </ul>
        )
    }
}

export default Navbar;