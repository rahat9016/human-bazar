import React from 'react';
import './manageItem.css'
import Delete from '../icons/delete.png'
import Edit from '../icons/edit.png'
const ManageItem = ({product}) => {
    const {name,wigth,price,}= product
    // console.log(product)
    const deleteEventHandler = (id)=>{
        fetch(`https://still-garden-35598.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
    }
    return (
       <div>
           <div>
           </div>
           <div className="manageItem">
               <h3 className="manageName">{name}</h3>
               <h3 className="manageWigth">{wigth}</h3>
               <h3 className="managePrice">${price}</h3>
               <img className="manageEdit"src={Edit} alt=""/>
               <img className="manageDelete" onClick={()=>deleteEventHandler(`${product._id}`)} src={Delete} alt=""/>
           </div>
       </div>
    );
};

export default ManageItem;