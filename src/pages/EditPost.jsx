import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchPosts } from '../store/posts.js'
import store from '../store.js'
import { useDispatch } from 'react-redux'
import Navbar from '../components/navbar.js'
import './editpoststyle.css'

const EditPost = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    //if (useSelector(state => state.posts).length === 0)
        //store.dispatch(fetchPosts)
    const post = useSelector(state => state.posts.filter(p => p.id == Number(id))[0])

    //let post = posts.filter(p => p.id === Number(id))[0]
   
    const [userId, setuserId] = useState(post.userId)
    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body)

   const editPost = () => {
       dispatch({ type: 'posts/editPost', payload: {id:Number(id),userId:Number(userId),title,body} })
       console.log(id,userId)
   }

    if (post)

        return (
            
            <div>
                <Navbar/>
                <div className='editCard'>
                <p>User id: </p>
                <input type="text" value={userId} onChange={(e)=>{setuserId(e.target.value)}}></input>
                <p>Title: </p>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
                <p>Body: </p>
                <input type="text" value={body} onChange={(e)=>{setBody(e.target.value)}}></input>
                <Link to={"/admin"}><button onClick={()=>editPost()} className='customButton'>Edit</button></Link>
                </div>
            </div>
        )

    return (
        <div>
            We have no post with this id
        </div>
    )
}

export default EditPost