import React from 'react'
import './Search.css';
import Search from './Search';
import { useState} from "react";
import Product from './Product';
import productsSchema from './Cars';
//const Cars = [{name:"volvo", id :"1"},{name:"ford", id :"2"},{name:"audi", id :"3"}]
const SearchFilter = () => {
    const [ProductsFilter,setProductsFilter]= useState("");
    if(ProductsFilter){
  return (<>
    <Search onChange={(e) => setProductsFilter(e.target.value)} />
    <br></br>
    {productsSchema.filter((p)=>{
        return( 
            p.model.includes(ProductsFilter.toUpperCase())
        )
    }).map((p)=>{
        return(
            <Product model={p.model} photo={p.photo} id={p.id} />
        )
    }) }
    {productsSchema.filter((p)=>{
        return( 
                
            p.year.includes(ProductsFilter)
        )
    }).map((p)=>{
        return(
            <Product model={p.model} photo={p.photo} id={p.id}/>
        )
    }) }
    {productsSchema.filter((p)=>{
        return( 
             
            p.body_style.includes(ProductsFilter.toLowerCase())
        )
    }).map((p)=>{
        return(
            <Product model={p.model} photo={p.photo}  id={p.id}/>
        )
    }) }
       </>
  )
}
else {
    return(
    <Search onChange={(e) => setProductsFilter(e.target.value)} />
    )
}
}
export default SearchFilter