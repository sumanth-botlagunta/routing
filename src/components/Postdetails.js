import React from 'react'
import {Link} from 'react-router-dom'



const Postdetails = (props) => {
    console.log(props);
    console.log(props.match.params.topic);
    var topic = props.match.params.topic;
    console.log(props.location.search.split('=')[1]);
    var pagenumber = props.location.search.split('=')[1];
    return (
        <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{topic} details</h5>
                    <h6>{pagenumber} page</h6>
                    <p className="card-text">{topic} Details is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Link  className="btn btn-primary" to='/post'>Post</Link>
                </div>
        </div> 
    )
}



export default Postdetails


