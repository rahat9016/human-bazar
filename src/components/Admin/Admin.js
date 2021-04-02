import React from 'react';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct'
import Header from '../Header/Header';
import ProductHeader from '../ProductHeader/ProductHeader';
import './admin.css'
const Admin = () => {
    return (
        <div className="adminContainer">
            <ProductHeader></ProductHeader>
        </div>
    );
};

export default Admin;