import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Attendence from '../Component/Attendence/Attendence';
import Login from '../Component/Login/Login';
import Main from '../Component/Main/Main';
import Signup from '../Component/SignUp/Signup';

export const Route =createBrowserRouter([
     {
        path:'/',element:<Main/>
     },
     {path:'/attendence',element:<Attendence/>},
     {path:'/login',element:<Login/>},
     {
        path:'/signup',element:<Signup/>
     }
])

export default Route;