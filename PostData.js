import axios from 'axios'
import React, { Component } from 'react'

export class AddData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             course:'',
             fee:''
        }
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/contacts', this.state)
        .then(response => {
            console.log(response)
        })
    }
    render() {
        return (
            <div>
            <form onSubmit={this.submitHandler}>
            <div className="form-group form-row">
              <label className="col-lg-4"> Name</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={(event) => {
                    this.setState({ name: event.target.value });
                  }}
                ></input>
              </div>
            </div>
            <div className="form-group form-row">
              <label className="col-lg-4">course</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.course}
                  onChange={(event) => {
                    this.setState({ course: event.target.value });
                  }}
                ></input>
              </div>
            </div>
             <div className="form-group form-row">
              <label className="col-lg-4">fee</label>
              <div className="col-lg-8">
                <input
                  type="text"
                  className="form-control"
                  value={this.state.fee}
                  onChange={(event) => {
                    this.setState({ fee: event.target.value });
                  }}
                ></input>
              </div>
            </div>
                <button type='submit' className="btn btn-primary">Submit Now</button>
                </form>
            </div>
        )
    }
}

export default AddData