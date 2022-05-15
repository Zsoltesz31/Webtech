import React from 'react'
import Navbar from '../components/navbar.js'
import Edittablecontainer from '../components/edittablecontainer.js'
import store from '../store.js'
import { fetchPosts } from '../store/posts.js'
import {Link} from 'react-router-dom'
import './adminpagestyle.css'



const Adminpage = () => {

    return (
        <div>
            <Navbar />
            <div className='buttonContainer'>
            <button onClick={() => store.dispatch(fetchPosts)} className='customButton'>Fetch posts</button>
            <Link to={"/addPost"}><button className='customButton'>Add new post</button> </Link>
            </div>
            <Edittablecontainer />
        </div>
    )
}

export default Adminpage