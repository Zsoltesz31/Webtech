import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchPosts } from '../store/posts.js'
import store from '../store.js'

const EditPost = () => {
    const { id } = useParams()

    if (useSelector(state => state.posts).length === 0)
        store.dispatch(fetchPosts)
    const posts = useSelector(state => state.posts)
    let post = posts.filter(p => p.id === Number(id))[0]

    if (post)

        return (
            <div>
                <p>Post id: {post.id}</p>
                <p>User id: {post.userId}</p>
                <p>Title: {post.title}</p>
                <p>Body: {post.body}</p>
            </div>
        )

    return (
        <div>
            We have no post with this id
        </div>
    )
}

export default EditPost