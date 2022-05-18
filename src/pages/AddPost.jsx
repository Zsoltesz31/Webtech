import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { fetchPosts } from '../store/posts.js'
import store from '../store.js'
import { useDispatch } from 'react-redux'
import Navbar from '../components/navbar.js'
import './editpoststyle.css'


const AddPost = () => {
    const dispatch = useDispatch()
    
     const [id, setId] = useState(0)
     const [userId, setuserId] = useState(0)
     const [title, setTitle] = useState('')
     const [body, setBody] = useState('')

    const addPost = () => {
        dispatch({ type: 'posts/addPost', payload: {id:Number(id),userId:Number(userId),title,body} })
        console.log(id,userId,title,body)
    }

        return (
            
            <div>
                <Navbar></Navbar>
                <div className='editCard'>
                <p>Post id: </p>
                <input type="text" onChange={(e)=>{setId(e.target.value)}}></input>
                <p>User id: </p>
                <input type="text" onChange={(e)=>{setuserId(e.target.value)}}></input>
                <p>Title: </p>
                <input type="text" onChange={(e)=>{setTitle(e.target.value)}}></input>
                <p>Body: </p>
                <input type="text" onChange={(e)=>{setBody(e.target.value)}}></input>
                <Link to={"/"}><button onClick={() => addPost()} className='customButton'>Add</button></Link>
                </div>
            </div>
        )

}

export default AddPost