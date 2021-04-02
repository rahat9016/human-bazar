import React from 'react';
import { useHistory } from 'react-router';
import './product.css'
const Product = ({product}) => {
    // console.log(product)
    const {imageUrl,wigth,price,name} = product
    const history = useHistory()
    const buyNowEventHandler = id =>{
        history.push(`/checkout/${id}`)
    }
    return (
        <div>
            <div className="productItem">
                <img src={imageUrl} alt=""/>
                <h2>{name}</h2>
                <div style={{display:'flex',justifyContent:"space-between"}}>
                    <h4>${price}</h4>
                    <button style={{color:'#fff', background:'#72BA59', border:'none',borderRadius:'5px'}} onClick={()=>buyNowEventHandler(product._id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;