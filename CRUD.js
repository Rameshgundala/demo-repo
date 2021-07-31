import React, { Component } from 'react'
import axios from 'axios'


export class CRUD extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:3200/contacts')
        .then(response=>{
            this.setState({
                posts:response.data
            })
        })
        .catch(error=>{
            console.log(error)

        })
    }
    render() {
        return (
            <div>
                products
                {this.state.posts.map(post=>{
                    return <div key={post.id}>
                           <p> {post.name}</p>
                           <p> {post.course}</p>
                           <p> {post.fee}</p>
                        </div>
                })}
            </div>
        )
    }
}

export default CRUD
