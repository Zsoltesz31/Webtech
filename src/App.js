import React, {Component} from 'react'
import PostCard from './components/postcards'
import Navbar from './components/navbar'
import EditTable from './components/edittable'

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      posts: [],
      isDataLoaded: false,
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=> res.json())
      .then(json => {
        this.setState({
          isDataLoaded:true,
          posts: json,
        })
      })
  }

render(){
  let {isDataLoaded,posts} = this.state

    if(!isDataLoaded){
       return(
        <div>Loading!</div>
       )
    }

  else{
    return (
      <div className="App"> 
          <Navbar posts={this.state.posts}/>
            {posts.map(posts=>(
              <PostCard title={posts.title} body={posts.body}></PostCard>
            ))}
             {posts.map(posts=>(
              <EditTable userId={posts.userId} id={posts.id} title={posts.title} body={posts.body}></EditTable>
            ))}
      </div>
    )
  }
}
}

export default App;
