import React from 'react'
import './SellerAddProducts.css' 

export const SellerAddProducts = () => {
  return (
    <div>
        <body>
    <div class="dashboard-container">
        <aside class="sidebar">
            <h2>Dashboard</h2>
            <ul>
                <li><a href="#add-product">Add Product</a></li>
                <li><a href="#view-products">View Products</a></li>
                <li><a href="#manage-orders">Manage Orders</a></li>
            </ul>
        </aside>
        <main class="content">
            {/* <!-- Add Product Section --> */}
            <section id="add-product">
                <h3>Add Product</h3>
                <form class="add-product-form">
                    <div class="input-group">
                        <label for="product-name">Product Name</label>
                        <input type="text" id="product-name" placeholder="Enter product name"/>
                    </div>
                    <div class="input-group">
                        <label for="product-price">Price</label>
                        <input type="number" id="product-price" placeholder="Enter product price"/>
                    </div>
                    <div class="input-group">
                        <label for="product-description">Description</label>
                        <textarea id="product-description" placeholder="Enter product description"></textarea>
                    </div>
                    <div class="input-group">
                        <label for="product-image">Product Image</label>
                        <input type="file" id="product-image"/>
                    </div>
                    <div class="input-group">
                        <button type="submit" class="btn btn-add-product">Add Product</button>
                    </div>
                </form>
            </section>

            {/* <!-- View Products Section --> */}
            <section id="view-products">
                <h3>View Products</h3>
                <table class="products-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- Example Product Row --> */}
                        <tr>
                            <td>Sample Product</td>
                            <td>$10.00</td>
                            <td>Sample product description.</td>
                            <td>
                                <button class="btn btn-edit">Edit</button>
                                <button class="btn btn-delete">Delete</button>
                            </td>
                        </tr>
                        {/* <!-- Add more product rows as needed --> */}
                    </tbody>
                </table>
            </section>

            {/* <!-- Manage Orders Section --> */}
            <section id="manage-orders">
                <h3>Manage Orders</h3>
                <table class="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- Example Order Row --> */}
                        <tr>
                            <td>#12345</td>
                            <td>John Doe</td>
                            <td>Sample Product</td>
                            <td>Pending</td>
                            <td>
                                <button class="btn btn-process">Accept Order</button>
                                <button class="btn btn-cancel">Decline Order</button>
                            </td>
                        </tr>
                        {/* <!-- Add more order rows as needed --> */}
                    </tbody>
                </table>
            </section>
        </main>
    </div>
</body>
    </div>
  )
}
