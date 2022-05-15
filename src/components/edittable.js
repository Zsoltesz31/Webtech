import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './edittablestyle.css'

const Edittable = (props) => {
    const dispatch = useDispatch()


    return (
        <tr>
            <td>{props.userId}</td>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.body}</td>
            <td><Link to={"/editPost/" + props.id}><button>Edit</button> </Link></td>
            <td><button onClick={() => dispatch({ type: 'posts/postDelete', payload: props.id })}>Delete</button></td>
        </tr >
    )
}

export default Edittable;