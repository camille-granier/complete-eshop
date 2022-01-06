import React, { useState, useEffect} from 'react';
import axios from 'axios';


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [playOnce, setPlayOnce] = useState(true);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {setData(res.data);
                           setFilter(res.data);
                           setPlayOnce(false)});

    }, []);

    const Loading = () => {
        return (
            <div>...</div>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                {filter.map((product) => ( 
                   <>
                        <div className='col-3'>
                            <div className='card'>
                                <img className='card-img-top' src={product.image} alt={product.title}/>
                                <div className='card-body'>
                                    <h5></h5>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </>
                   )
                )}
            </>
        )
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 mb-4'>
                        <h1 className='display-5 fw-bold text-center py-2'>Latest products</h1>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Products;