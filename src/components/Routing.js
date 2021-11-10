import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Profile from './Profile'
import Post from './Post'
import Postdetails from './Postdetails';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route exact path="/post" element={<Post/>}/>
                <Route path="/post/:topic" element={<Postdetails/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        // <BrowserRouter>
        //     <Header/>
        //     <Route exact path="/" component={Home}/>
        //     <Route exact path="/post" component={Post}/>
        //     <Route path="/post/:topic" component={Postdetails}/>
        //     <Route path="/Profile" component={Profile}/>
        //     <Footer/>
        // </BrowserRouter>

        // <BrowserRouter>
        //     <Header/>
        //     <Routes>
        //         <Route exact path='/' element={<Home/>}/>
        //         <Route path="/profile" element={<Profile/>}/>
        //         <Route exact path="/post" element={<Post/>}/>
        //         <Route path="/post/:topic" element={<Postdetails/>}/>
        //     </Routes>
        //     <Footer/>
        // </BrowserRouter>
    )
}

export default Routing
