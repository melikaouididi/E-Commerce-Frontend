import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);        // State to store products
    const [loading, setLoading] = useState(false); // State to handle loading
    const [error, setError] = useState(null);      // State to handle errors

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('user/product/all');
            console.log(response)
            setProducts(response.data);
        } catch (error) {
            console.log(error)
            setError('Failed to fetch products.');
        } finally {
            setLoading(false);
        }
    };

    // Loader Component
    const Loader = () => <div className="loader">Loading...</div>;

    // Error Component
    const ErrorMessage = ({ message }) => <div className="error">{message}</div>;

    return (
        <div className="item-list-container">
            <h2>products for Sale</h2>
            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            <div className="item-list">
                {products.map(item => (
                    <div key={item.id} className="item-card">
                        <img src={item.image} alt={item.name} className="item-image" />
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-price">${item.price.toFixed(2)}</p>
                        <button className="buy-button">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
