import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {

    const state = useSelector((state) => state.handleCart);
    return (
        <>
           <NavLink to='/cart' className='btn-header btn btn-outline-dark ms-2'>
               <span className='fa fa-shopping-cart me-2'></span><span className="btn-text">Cart({state.length})</span>
            </NavLink> 
        </>
    );
};

export default CartBtn;