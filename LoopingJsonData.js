import React, { Component } from 'react'

export class LoopingJsonData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            mydetails:[], 
        }
    }
    componentDidMount(){
        fetch('https://reqres.in/api/users?page=2')
        .then(response=>response.json())
        .then(userdata=>this.setState({mydetails:userdata.data}))
    }
    render() {
        //console.log(this.state.mydetails)
        return (
            <div>
                <h2>LoopingJsonData</h2>
                {this.state.mydetails.map(user=>{
                    return <div key={user.id}>
                        <p>{user.first_name}</p>
                        <p>{user.last_name}</p>
                        <p>{user.email}</p>
                        <p>{user.avatar}</p>

                    </div>
                })}
            </div>
        )
    }
}

export default LoopingJsonData
