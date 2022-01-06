import React, { useState, useEffect} from 'react';
import axios from 'axios';


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [playOnce, setPlayOnce] = useState(true);

    useEffect(() => {

        setLoading(true);

        axios.get("https://fakestoreapi.com/products")
            .then((res) => {setData(res.data);
                           setFilter(res.data);
                           setPlayOnce(false);
                           setLoading(false)});

    }, []);

    const filteredProducts = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const Loading = () => {
        return (
            <div>...</div>
        )
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons'>
                    <button className='btn btn-outline-dark' onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark' onClick={() => filteredProducts("Men's Clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark' onClick={() => filteredProducts("Women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark' onClick={() => filteredProducts("Jewelery")}>Jewellery</button>
                    <button className='btn btn-outline-dark' onClick={() => filteredProducts("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => ( 
                   <>
                        <div className='col-3'>
                            <div className='card'>
                                <img className='card-img-top' src={product.image} alt={product.title}/>
                                <div className='card-body'>
                                    <h5>{product.title.substring(0, 12)}</h5>
                                    <p>€{product.price}</p>
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