import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export class GetData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[]
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:3001/contacts')
        .then(response=>{
            this.setState({
                posts:response.data
            })
        })
        .catch(error=>{
            console.log(error)

        })
    }
    onDeleteClick = async (id) => {
        if (window.confirm("Are you sure to delete this customer?")) {
          //make DELETE request
          var response = await fetch(`http://localhost:3001/contacts/${id}`, {
            method: "DELETE",
          });
    
          if (response.ok) {
            //200 to 299
            var allposts = [...this.state.posts];
    
            allposts = allposts.filter((post) => {
              return post.id !== id;
            });
            this.setState({ posts: allposts });
          }
        }
      };
    render() {
        return (

            <div>
                <h1>Posts</h1>
                <Link to="/AddData" className="btn btn-primary">
          Add-Newpost
          </Link>
                <table className="table">
                    <thead>
                        <th>Name</th>
                        <th>Course</th>
                        <th>fee</th>
                        <th>Options</th>

                    </thead>
                    <tbody>
                {this.state.posts.map(post=>{
                    return (<tr key={post.id}>
                           <td> {post.name}</td>
                           <td> {post.course}</td>
                           <td>{post.fee}</td>
                           <td>
                <Link to={`/EditData/${post.id}`} className="btn btn-primary">Edit</Link>
                            </td>
                            <td>
                <button className="btn btn-danger" onClick={() => { this.onDeleteClick(post.id);}}>Delete</button>
                            </td>
                        </tr>)
                })}
                </tbody>
                </table>
            </div>
        )
        
    }
    
}

export default GetData
