import axios from 'axios'
import React, { Component } from 'react'
import Post from './Post'

export class Posts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3200/posts')
            .then(response=>{
                this.setState({
                    posts:response.data
                })
            })
            .catch(
                error=>{
                    console.log(error)
                }
            )
    }
    onPostClickedHandler=(id)=>{
        console.log(id)
    }
    render() {
        const posts=this.state.posts.map(post=>{
            return <Post key={post.id} post={post} postclicked={this.onPostClickedHandler.bind(this,post.id)} />
        })
        return (
            <div className='border'>
                <h1 >Posts Data</h1>
                {posts}
            </div>
        )
    }
}

export default Posts
