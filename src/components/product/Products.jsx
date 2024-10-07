import React, { useEffect, useState } from 'react'
import Product from './Product'
import Cart from '../shared/Cart'
import toast from 'react-hot-toast'
import addToCart from '../../utilities/localstorage'
import useCart from '../../hooks/useCart'
import useProduct from '../../hooks/useProduct'

export default function Products() {
  const {products} = useProduct()
const {handleAddToCart, cart} = useCart()




  return (
    <div>
      <h1 className='text-4xl text-center text-amber-500'>This is our Products</h1>

      <div className='grid grid-cols-3 gap-4'>
      {
        products.map((product)=><Product handleAddToCart={handleAddToCart} product={product}></Product> )
      }
      </div>
      <Cart cart={cart} />
      
    </div>
  )
}
