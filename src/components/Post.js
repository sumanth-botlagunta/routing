import React from 'react'
import {Link} from 'react-router-dom'

const Post = (props) => {
    return (
        <div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Post</h5>
                    <p className="card-text">Post is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Link  className="btn btn-primary" to='/profile'>Profile</Link>
                </div>
            </div>                   
                    <h2>JavaScript</h2>
                    <Link className="btn btn-primary" to="/post/JavaScript?page=1">Details</Link>
                    <h2>React</h2>
                    <Link className="btn btn-success" to="/post/React?page=2">Details</Link>
                    <h2>Node</h2>
                    <Link className="btn btn-info" to="/post/Node?page=3">Details</Link>
        </div>
        
    )
}

export default Post
