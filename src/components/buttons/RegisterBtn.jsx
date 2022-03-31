import React from 'react';
import { NavLink } from 'react-router-dom';

const RegisterBtn = () => {
    return (
        <>
           <NavLink to='/register' className='btn-header btn btn-outline-dark ms-2'>
               <span className='fa fa-user-plus me-2'></span><span className="btn-text">Register</span>
            </NavLink> 
        </>
    );
};

export default RegisterBtn;