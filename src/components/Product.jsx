import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { renderIntoDocument } from 'react-dom/cjs/react-dom-test-utils.production.min';
import { useParams, NavLink } from 'react-router-dom';

const Product = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setProduct(res.data);
                setLoading(false);
            })
    },[]);

    const Loading = () => {
        return (
            <div>...</div>
     )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className='col-md-6 my-4 py-3'>
                    <img height="500vw" width="500vw" src={product.image} alt={product.title}/>
                </div>
                <div className='col-md-6 my-4 py-3'>
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate}<i className='fa fa-star' /></p>
                    <h3 className='display-6 fw-bold my-4'>€{product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-dark px-4 py-2 me-2'>Add to Cart</button>
                    <NavLink className='btn btn-dark' to='/'>Go to Cart</NavLink>
                </div>
            </>

        )
    }
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
            
        </div>
    );
};

export default Product;