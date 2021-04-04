import React, { useEffect, useState } from 'react';
import ManageItem from '../ManageItem/ManageItem';
import ProductHeader from '../ProductHeader/ProductHeader';
import './ManageProduct.css'
const ManageProduct = () => {
    const [products,setProduct]= useState([])
    useEffect(()=>{
        fetch(`https://still-garden-35598.herokuapp.com/productItems`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        
        <div className="manageContainer">
            <ProductHeader></ProductHeader>
               <div className="manageDetail">
                    <h3 className="manageName">Name</h3>
                    <h3 className="manageWigth">Wigth</h3>
                    <h3 className="managePrice">Price</h3>
                    <h3 className="manageAction">Action</h3>
               </div>
               {
                    products.length === 0 &&<div style={{position:'absolute',top:'50%',left:'50%',transform:'translate("-50%,-50%")'}} className="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span></div>
                
                }
            {
                products.map(product => <ManageItem product={product} key={product._id}></ManageItem>)
            }
        </div>
    );
};

export default ManageProduct;