import React from 'react'
import Navbar from '../components/navbar.js'
import Edittablecontainer from '../components/edittablecontainer.js'
import store from '../store.js'
import { fetchPosts } from '../store/posts.js'



const Adminpage = () => {

    return (
        <div>
            <Navbar />
            <button onClick={() => store.dispatch(fetchPosts)}>Fetch posts</button>
            <Edittablecontainer />
        </div>
    )
}

export default Adminpage