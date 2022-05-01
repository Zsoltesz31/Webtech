import React, {Component} from 'react'
import './edittablestyle.css'

class Navbar extends Component {


    render(){
        return(
            <table>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
            <tr>
              <td>{this.props.userId}</td>
              <td>{this.props.id}</td>
              <td>{this.props.title}</td>
              <td>{this.props.body}</td>
            </tr>
          </table>
        )
    }
}

export default Navbar;