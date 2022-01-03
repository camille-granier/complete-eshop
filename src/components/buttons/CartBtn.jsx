import React from 'react';
import { NavLink } from 'react-router-dom';

const CartBtn = () => {
    return (
        <>
           <NavLink to='/cart' className='btn btn-outline-dark ms-2'>
               <span className='fa fa-shopping-cart me-2'></span>Cart
            </NavLink> 
        </>
    );
};

export default CartBtn;