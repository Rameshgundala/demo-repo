import axios from 'axios'
import React, { Component } from 'react'

export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }
    changeHandler=(e)  =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3200/contacts', this.state)
        .then(response => {
            console.log(response)
        })
    }
    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <div>
                    <input 
                    type='text' 
                    name ='userId' 
                    onChange={this.changeHandler}
                    value={userId}></input>
                </div>
                <div>
                    <input 
                    type='text' 
                    name ='title' 
                        onChange={this.changeHandler}
                    value={title}></input>
                </div>
                <div>
                    <input 
                    type='text' 
                    name ='body' 
                    onChange={this.changeHandler}
                    value={body}></input>
                </div>
                <button type='submit'>Submit Now</button>
                </form>
            </div>
        )
    }
}

export default PostForm