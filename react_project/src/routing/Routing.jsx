import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from '../navbar/Navbar.jsx'
import Home from '../component/home/Home.jsx'
import AllProducts from '../component/allproducts/AllProducts.jsx'
import Cart from '../component/cart/Cart.jsx'
import EditProfile from './../component/editProfile/EditProfile.jsx';
import Login from './../component/login/Login.jsx';
import Signup from './../component/signup/SignUp.jsx';


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
                path: "allproducts",
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
                path: "signup",
                element : <SignUp/>
            },
        ]
    }
])

export default Routing