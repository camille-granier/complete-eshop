import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <div className='card bg-dark text-white border-0'>
                <img src='assets/bg.jpg' className='card-img' alt='Background' height='590vh' />
                <div className='card-img-overlay d-flex flex-column justify-content-center'>
                    <div className='container'>
                        <h5 className='card-title display-3 fw-bolder mb-1'>NEW PRODUCTS</h5>
                        <p className='card-text fs-2 lead'>Check out our new arrivals</p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    );
};

export default Home;