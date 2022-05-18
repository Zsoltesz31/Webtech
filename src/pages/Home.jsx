import React from 'react'
import PostCard from '../components/postcards.js'
import Navbar from '../components/navbar.js'
import { useSelector } from 'react-redux'
import { selectUser } from '../store/userSlice.js'

const Home = () => {

    const posts = useSelector((state) => state.posts)
    const user = useSelector(selectUser)
    console.log(user)

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