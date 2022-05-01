import React, {Component} from 'react'
import './postcardsstyle.css'

class PostCard extends Component {


    render(){
        return(
            <div className='cardcontainer'>
            <h2 className='title'>{this.props.title}</h2>
            <p className='postbody'>{this.props.body}</p>
            </div>
        )
    }
}

export default PostCard;