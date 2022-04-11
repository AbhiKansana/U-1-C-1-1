import React from "react"
import data from '../data.json'
import GroceryItem from './GroceryItem';

import './Item.css'


const GroceryDetails = ()=>{
console.log(data)
  let arr = data.map((item) =>{
      return(
        <GroceryItem key={item.title}  img={item.imgURL}  title={item.title} price={item.sellingPrice}  mrp={item.mrp} /> 
  )
  })

    return(
        <div className="main">
        <h1>Groceries</h1>
        <div className="container">
           {arr}
        </div>
        </div>
    )
}
export default GroceryDetails