import React, { useEffect, useState } from 'react';
import "./Cart.css";
import CartItem from './cartItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const CartComponent = () => {
    const navigate = useNavigate();

    useEffect(() => {
       if (!localStorage.token){
        navigate('/signin')
       }
    }, [localStorage.token]);


    const [cartItems, setCartItems] = useState([]);
   const [success,setSuccess] = useState("")
   const [error,setError] = useState("")
//    const [loading, setLoading] = useState(false);  // Loader state
   const [alert, setAlert] = useState(null);       // Alert state

 

    useEffect(() => {
        // Fetch cart items from the API using axios
        fetchCartItems();
    }, []);

    const fetchCartItems = async () => {

        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                    "Content-Type": "application/json"
                }
            }
            const response = await axios.get('https://e-commerce-d2rw.onrender.com/cart');
            console.log(response)
            setSuccess('Successful')
            setCartItems(response.data);
            setAlert({ type: 'success', message: 'Cart fetched successfully!' });
        } catch (error) {
            console.error('Error fetching cart items:', error);
            setAlert({ type: 'error', message: 'Failed to fetch cart.' });
        }
    };

    const handleRemoveItem = async (id) => {
        try {
            await axios.delete(`https://e-commerce-d2rw.onrender.com/cart/${id}`);
            setCartItems(cartItems.filter(item => item.id !== id));
            setAlert({ type: 'success', message: 'item removed successfully!' });
        } catch (error) {
            console.error('Error removing item from cart:', error);
            setAlert({ type: 'error', message: 'Failed to remove item.'});
        }
    };

    const handleUpdateQuantity = async (id, quantity) => {
        try {
            const response = await axios.put(`https://e-commerce-d2rw.onrender.com/cart/${id}`, { quantity });
            setCartItems(cartItems.map(item => item.id === id ? response.data : item));
        } catch (error) {
            console.error('Error updating item quantity:', error);
        }
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart-container">
            <h2>Your Shopping Cart</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onRemove={handleRemoveItem}
                            onUpdateQuantity={handleUpdateQuantity}
                        />
                    ))}
                </tbody>
            </table>
            <div className="cart-summary">
                <h3>Cart Summary</h3>
                <p>Subtotal: ${getTotalPrice()}</p>
                <button className="btn btn-checkout">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default CartComponent;
