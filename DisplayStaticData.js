import React, { Component } from 'react'
export class DisplayStaticData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myinfo: {id:'1',name:'Ramesh', Education:'Btech plus MBA',Address:'hyderabad'}
        }
    }
    
    render() {
        return (
            <div>
                <div style={{textAlign: 'center'}}>
                     <p>{this.state.myinfo.id}</p>
                     <p> {this.state.myinfo.name}</p>
                     <p> {this.state.myinfo.Education}</p>
                     <p> {this.state.myinfo.Address}</p>    
                <img src='mypic.jpg' height={300} width={300} alt='ramesh pic'/>
                </div>

            </div>
        )
    }
}

export default DisplayStaticData
