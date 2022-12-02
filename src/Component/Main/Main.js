import React from 'react';
import { Outlet } from 'react-router-dom';
import Signup from '../SignUp/Signup';
 

const Main = () => {
    return (
        <div>
          <Signup/>
            <Outlet/>
            
        </div>
    );
};

export default Main;