import React, { Component, useEffect, useState } from 'react'
import './navbarstyle.css'
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { logout, selectUser } from '../store/userSlice.js';

const Navbar = () => {
        const {user} = useSelector(selectUser);

        const dispatch = useDispatch()
        const navigate = useNavigate()
        const handleLogut = (e) =>{
            e.preventDefault()

            dispatch(logout())
            navigate('/')
        }


        return (
            <ul className="navbar">
                <li><Link to="/">Posts</Link></li>
                {user != null ? <li><Link to="/admin">Manage posts</Link></li> : <li></li>}
                {user != null ? <li><a href="#" onClick={(e)=> handleLogut(e)}>Logout</a></li>:<li><Link to="/login">Login</Link></li>}
            </ul>
        )
    }


export default Navbar;