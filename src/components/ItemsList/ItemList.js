import React, { useState } from 'react'
import productsSchema from'../Search/Cars'
import './ItemsList.css'
import * as ROUTES from './../constants/routes';
import {  Link } from 'react-router-dom';
import Navbar from '../nav/Navbar';

export default function ItemList (){
    const Admin = true;
    const [product,setproduct] = useState(productsSchema);
    const del=(productId)=>{
     const update = product.filter((p)=> productId!=p.id)
     setproduct(update)
    }
    if(Admin)
    {
        return (<>
            <Navbar/>
            <div className='row'>
            {product.map((e)=>{
                return(
                    
                    <div className='card'>
                    <div className='card-header'>
                    <h3>
                    {e.model} 
                    </h3>
                    <button className='btn-list' onClick={()=>del(e.id)}> <span>Delete</span></button>
                    </div>
                    <div className='card-body' style={{ backgroundImage: `url(${e.photo})` }}>
                        <p> <span>body style:</span> {e.body_style}<br/>
                        <span> price:</span> {e.price}<br/>
                       <br/></p>
                       <Link to = {`${ROUTES.SINGLE_ITEM}/${e.id}`}>
                       <button className='btn-list'> <span>More Details</span></button>
                       
                       </Link>
                    </div>
                </div>
                )
            }) }
            </div>
            </>
          )
    }
    else{
    return (<>
        <Navbar/>
        <div className='row'>
        {productsSchema.map((e)=>{
            return(
                <div className='card'>
                <div className='card-header'>
                <h3>
                {e.model} 
                </h3>
                </div>
                <div className='card-body' style={{ backgroundImage: `url(${e.photo})` }}>
                    <p> <span>body style:</span> {e.body_style}<br/>
                    <span> price:</span> {e.price}<br/>
                   <br/></p>
                   <Link to = {`${ROUTES.SINGLE_ITEM}/${e.id}`}>
                   <button className='btn-list'> <span>More Details</span></button>
                   
                   </Link>
                </div>
            </div>
            )
        }) }
        </div>
        </>
      )
}
}
