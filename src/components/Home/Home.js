import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './home.css'

const Home = () => {
    const [products,setProduct]= useState([])
    useEffect(()=>{
        fetch(`https://still-garden-35598.herokuapp.com/productItems`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className="row homeContainer">
            <Header></Header>
            
            <div className="productContainer">
            {
                products.map(product => <Product product={product} key={product._id}></Product>)
            }
            </div>
        </div>
    );
};

export default Home;