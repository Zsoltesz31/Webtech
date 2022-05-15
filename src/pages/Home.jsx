import React from 'react'
import PostCard from '../components/postcards.js'
import Navbar from '../components/navbar.js'
import { useSelector } from 'react-redux'

const Home = () => {

    const posts = useSelector((state) => state.posts)


    return (
        <div className="App">
            <Navbar></Navbar>
            {posts.map(posts => (
                <PostCard title={posts.title} body={posts.body} key={posts.id} />
            ))}


        </div>
    )
}

export default Home