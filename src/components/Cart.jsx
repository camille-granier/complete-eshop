import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delCart } from '../redux/actions';

const Cart = () => {

    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delCart(item));
    }

    const cartItems = (cartItem) => {
        return (
            <div className='mt-5 mb-1 py-2 bg-light rounded-3 mx-5' key={cartItem.id}>
                <div className='container py-3'>
                    <button onClick={()=>handleClose(cartItem)} className='btn-close float-end' aria-label="Close"></button>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={cartItem.image} alt={cartItem.title} height='200px' width='180px'/>
                        </div>
                        <div className='col-md-4'>
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>€{cartItem.price}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    };

    const button = () => {
        return (
                <div className='container py-3'>
                    <div className='row'>
                        <NavLink className="btn btn-dark mx-auto w-25 m-2" to='/checkout'>Proceed to Checkout</NavLink>
                    </div>
                </div>
        )
    };

    const emptyCart = () => {
        return (
        <>
            <div className='bg-light rounded-3 my-5 py-5 px-5 mx-3'>
                <div className='container py-3'>
                    <div className='row'>
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        </>
        )
    };

    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </>
    );
};

export default Cart;