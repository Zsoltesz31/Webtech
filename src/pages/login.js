import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { login} from "../store/userSlice.js"
import './loginstyle.css'
import {useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice.js";

const Login = () => {
const [name,setName] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()
const dispatch = useDispatch()

const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(login({
        name:name,
        password:password,
        loggedIn:true
    }))

    navigate('/')
}


return(
<div className="container">
    <form className="loginContainer" onSubmit={(e)=>handleSubmit(e)}>
        <h1>Login</h1>
        <input className="customInput" type="text" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input className="customInput" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit" className='customButton'>Login</button>
    </form>
</div>
)
}

export default Login;