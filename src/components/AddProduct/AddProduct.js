import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import ProductHeader from '../ProductHeader/ProductHeader';
import './addProduct.css'
const AddProduct = () => {
    const [imageURL,setImageURL] = useState(null)
    const { register, handleSubmit,} = useForm();
    
    const onSubmit = data =>{
        let eventData ={
            name: data.name,
            wigth:data.wigth,
            price:data.price,
            imageUrl: imageURL
           
        }
        console.log(eventData)
        const url = `https://still-garden-35598.herokuapp.com/addEvent`
        fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(eventData)
        })
        .then(res => console.log("server response",res));
     
    }
    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key','1aa0e83cba87634c5820e39f7a0d07a6')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(response => {
            setImageURL(response.data.data.display_url);
          })
          .catch(error => {
            console.log(error);
          });
    }

    return (
        <div >
            <ProductHeader></ProductHeader>
            <div className="formContainer">
            <form className="fromAddProduct"  onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>Product Name</p>
                    <input name="name" ref={register({ required: true })} placeholder="Enter Name"required/>
                </div>
                <div>
                    <p>Wigth</p>
                    <input name="wigth" ref={register({ required: true })} placeholder="Enter Name"/>
                </div>
                <div>
                    <p>Add Price</p>
                    <input name="price" ref={register({ required: true })} placeholder="Enter Price"required/>
                </div>
                <div>
                    <p>Add Photo</p>
                    <input className="inputImageUpload" type="file" accept="image/*,.pdf" onChange={handleImageUpload}required/>
                </div>
                <button className="submitBtn" type="submit">submit</button>
            </form>
            </div>
            
        </div>
    );
};

export default AddProduct;