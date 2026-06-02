import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Home from '../component/home/Home'
import AllProducts from '../component/allProducts/AllProducts'
import Cart from '../component/cart/Cart'
import EditProfile from './../component/editProfile/EditProfile';
import Login from './../component/login/Login';
import Signup from './../component/signUp/Signup';


const Routing = createBrowserRouter([
    {
        path : "/",
        element : <Navbar/>,
        children : [
            {
                index: true,
                element : <Home/>
            },
            {
                path: "allProducts",
                element : <AllProducts/>
            },
            {
                path: "cart",
                element : <Cart/>
            },
            {
                path: "editProfile",
                element : <EditProfile/>
            },
            {
                path: "login",
                element : <Login/>
            },
            {
                path: "signUp",
                element : <Signup/>
            },
        ]
    }
])

export default Routing