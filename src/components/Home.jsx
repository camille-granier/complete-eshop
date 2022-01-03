import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <div className='card'>
                <img src='assets/bg.jpg'/>
            </div>
            <Products/>
        </div>
    );
};

export default Home;