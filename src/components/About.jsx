import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className='container pb-5'>
                <div className='about row py-md-5 my-md-5'>
                    <div className='col-lg-6 d-flex flex-column justify-content-center text-center'>
                        <h1 className='display-1 mb-4'>About Us</h1>
                    </div>
                    <div className='col-lg-6 d-flex flex-column justify-content-center px-4'>
                        <p className='lead my-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <NavLink className='btn btn-dark mw-25 my-5 mx-auto' to='/contact'>Contact Us</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
