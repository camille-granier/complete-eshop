import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        if(mounted){
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {setData(res.data);
                           setFilter(res.data);
                           setLoading(false)});
            }
            return () => {
                mounted = false;
            }

    }, []);

    const filteredProducts = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }

    const Loading = () => {
        return (
            <div className='d-flex justify-content-center'><span className="loader"></span></div>
        )
    }

    const ShowProducts = () => {
        return (
            <>
            
                <div className='buttons d-flex flex-row flex-wrap justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-sm-3' onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-sm-3' onClick={() => filteredProducts("men's clothing")}>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-sm-3' onClick={() => filteredProducts("women's clothing")}>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-sm-3' onClick={() => filteredProducts("jewelery")}>Jewellery</button>
                    <button className='btn btn-outline-dark me-sm-3' onClick={() => filteredProducts("electronics")}>Electronics</button>
                </div>
                {filter.map((product) => ( 
                    <>
                        <div className='col-lg-3 mb-4' key={product.id} style={{width: "18rem"}}>
                            <div className='card h-80 p-4 text-center'>
                                <img className='card-img-top' height='220px' src={product.image} alt={product.title}/>
                                <div className='card-body'>
                                    <h5 className='card-title mb-0'>{product.title.substring(0, 12)}</h5>
                                    <p className='card-text lead fw-bold'>???{product.price}</p>
                                    <NavLink to={`/products/${product.id}`} className='btn btn-outline-dark'>Buy Now</NavLink>
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
            <div className='container my-4 py-4 mx-auto d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-12 text-center mb-4'>
                        <h1 className='display-5 fw-bold text-center py-3'>Latest products</h1>
                        <hr/>
                    </div>
                </div>
                </div>
                <div className='row justify-content-center mx-auto px-4'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
        </div>
    );
};

export default Products;