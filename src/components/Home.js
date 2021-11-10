import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Home</h5>
                <p className="card-text">Home is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <Link  className="btn btn-primary" to='/post'>Post</Link>
            </div>
            </div>
        </div>
    )
}

export default Home
