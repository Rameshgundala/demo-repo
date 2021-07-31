import React, { Component } from 'react'

export class Userregistrationform extends Component {

    state={
        title:'',
        description:'',
        status:''
    };
    AddpostHandler =(e)=>{
        e.preventDefault();
        console.log(this.state)

    }
    textChange=(title,e)=>{
        this.setState({
            [title]:e.target.value
        })
    }
    render() {
        return (
            <div>
                <h2 className="text-success">AddPost</h2>
                <form className="form" onSubmit={this.AddpostHandler}>
                    <div>
                        <label htmlFor='title'>title</label>
                        <input type='text' className="form-control" value={this.state.title} onChange={this.textChange.bind(this,'title')}/>
                    </div>
                    <div>
                        <label htmlfor='title'>Description</label>
                        <textarea type='number' className="form-control" value={this.state.description} onChange={this.textChange.bind(this,'description')}/>
                    </div>
                    <div>
                        <label htmlFor='title' >Status</label>
                        <select className="form-control" onChange={this.textChange.bind(this,'status')}
                        value={this.state.active}>
                            <option value='Active'>Active</option>
                            <option value='Inactive'>Inactive</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary'>AddPost</button>
                    </div>
                </form>
            
                {this.state.title}
                {this.state.description}
                {this.state.status}

            </div>
        )
    }
}

export default Userregistrationform
