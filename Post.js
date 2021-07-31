import React from 'react'

export default function Post(props) {
    return (
        <div className='container-fluid	border border-1'>
            <a href="#" onClick={props.postclicked}>
            <div>Id:{props.post.id}</div>
            <div>Title:{props.post.title}</div>
            <div>Description:{props.post.description}</div>
            </a>
        </div>
    )
}
