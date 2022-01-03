import React, { useState, useEffect} from 'react';


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);

    const ShowProducts = () => {
        return (
            <>
                {filter.map((product) => {
                    <>
                        <div className='col-3'>
                            
                        </div>
                    </>
                }}
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
                <div className='row'></div>
            </div>
        </div>
    );
};

export default Products;