import React, {Component} from 'react'
import './navbarstyle.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admingpage from "../adminpage";

class Navbar extends Component {


    render(){
        return(
        <ul className="navbar">
            <li><a href="">Edit posts</a></li>
        </ul>
        )
    }
}

export default Navbar;