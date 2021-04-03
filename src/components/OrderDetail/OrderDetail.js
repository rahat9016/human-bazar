import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderItems from '../OrderItem/OrderItems'
import Header from '../Header/Header'
import { Link } from 'react-router-dom';
import './OrderDetail.css'
const OrderDetail = () => {
    const [orders,setOrder] = useState([])
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch('https://still-garden-35598.herokuapp.com/orderDetail?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    
    return (
        <div className="orderDetailContainer">
            <div style={{marginBottom:'20px'}}>
                <Header></Header>
            </div>
            <div className="orderDetails">
                <h3>Id:</h3>
                <h3>Image</h3>
                <h3>Name</h3>
                <h3>Price</h3>
                <h3>Wigth</h3>
                <h3>Order Time</h3>
            </div>
            {
                    orders.length === 0 &&<div style={{position:'absolute',top:'50%',left:'50%',transform:'translate("-50%,-50%")'}} className="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span></div>
                
                }
            {
                orders.map(order => <OrderItems order={order} key={order._key}></OrderItems>)
            }
            <Link to="/home" className="backBtn">Back to Home</Link>
        </div>
    );
};

export default OrderDetail;