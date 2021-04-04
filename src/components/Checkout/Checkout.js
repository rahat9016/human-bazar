import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './checkout.css'
import Header from '../Header/Header';
import { UserContext } from '../../App';
const Checkout = () => {
    const [loggedInUser] = useContext(UserContext)
    const {id} = useParams()
    const [product,setProduct] = useState({})
    useEffect(()=>{
        fetch(`https://still-garden-35598.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id])
    const { email,displayName }= loggedInUser

    const checkoutEventHandler = () => {
        const orderDetails = {email:email,userName:displayName,...product, orderTime: new Date().toDateString('dd/mm/yyyy') }
        console.log(orderDetails);
        fetch('https://still-garden-35598.herokuapp.com/placeOrder', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Your order successfully done!")
            }
        })
      }
    return (
        <div className="checkoutContainer">
            <Header></Header>
        <div className="mainCheckBox">
            <h1>Checkout</h1>
            <div className="container checkoutBox">
                    <div className="aboutBox">
                        <h4>Description</h4>
                        <h4>Quantity</h4>
                        <h4>Price</h4>
                    </div>
                    <div className="productBox">
                        <h3>{product.name}</h3>
                        <h3>1</h3>
                        <h3>${product.price}</h3>
                    </div>
                    <div className="totalBox">
                        <h3>Total</h3>
                        <h3>${product.price}</h3>
                    </div>
                </div>
            <button onClick={checkoutEventHandler} className="submitBtn" type="submit">Checkout</button>
            </div>
        </div>
    );
};

export default Checkout;