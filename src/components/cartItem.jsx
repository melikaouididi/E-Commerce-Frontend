import React from 'react';
import "./Cart.css"

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
    return (
        <tr>
            <td>
                <div className="product-info">
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                </div>
            </td>
            <td>${item.price}</td>
            <td>
                <input
                    type="number"
                    value={item.quantity}
                    className="quantity-input"
                    onChange={(e) => onUpdateQuantity(item.id, e.target.value)}
                />
            </td>
            <td>${item.price * item.quantity}</td>
            <td>
                <button className="btn btn-remove" onClick={() => onRemove(item.id)}>Remove</button>
            </td>
        </tr>
    );
};

export default CartItem;
