import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginBtn = () => {
    return (
        <>
           <NavLink to='/login' className='btn-header btn btn-outline-dark ms-2'>
               <span className='fa fa-sign-in me-2'></span><span className="btn-text">Login</span>
            </NavLink> 
        </>
    );
};

export default LoginBtn;