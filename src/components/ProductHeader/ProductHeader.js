import React from 'react';
import { Link } from 'react-router-dom';
import './ProductHeader.css'

const ProductHeader = () => {
    return (
        <div>
            <div className="productHeaderContainer">
                <div className="productHeader">
                    <Link className="nav-link navHeader" to="/Home">Human Bazar</Link>
                    <Link className="nav-link navHeader" to="/addProduct">Add Product</Link>
                    <Link className="nav-link navHeader" to="/manageProduct">Manage Product</Link>
                    <Link className="nav-link navHeader" to="/editProduct">Edit Product</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductHeader;