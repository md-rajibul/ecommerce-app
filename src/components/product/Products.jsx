import React, { useEffect, useState } from 'react'
import Product from './Product'
import Cart from '../shared/Cart'

export default function Products() {
  const [products, setProducts] = useState([])
  const handleAddToCart = (id) =>{
    console.log(id)
   }
  


  useEffect(()=>{
    fetch("./products.JSON")
    .then(response=>response.json())
    .then(data=>setProducts(data))
  },[])
  return (
    <div>
      <h1 className='text-4xl text-center text-amber-500'>This is our Products</h1>

      <div className='grid grid-cols-3 gap-4'>
      {
        products.map((product)=><Product handleAddToCart={handleAddToCart} product={product}></Product> )
      }
      </div>
      <Cart/>
      
    </div>
  )
}
