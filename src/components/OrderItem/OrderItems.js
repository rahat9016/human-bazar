import React from 'react';

import './orderItems.css'
const OrderItems = ({order}) => {
    console.log(order)
    const {imageUrl,email,userName, name,orderTime,wigth,price} = order
    const sliceItem = order._id.slice(2,6)
    return (
        <div className="container" >
            <div className="orderItem">
                <h3>Id: {sliceItem}</h3>
                <img src={imageUrl} alt=""/>
                <h3>{name}</h3>
                <h3>${price}</h3>
                <h3>{wigth}</h3>
                <h3>{orderTime}</h3>
            </div>
            
        </div>
    );
};

export default OrderItems;