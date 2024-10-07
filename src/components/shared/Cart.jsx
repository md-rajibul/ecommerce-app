import React, { useEffect, useState } from 'react'
import getCart from '../../utilities/getItem'
import useCart from '../../hooks/useCart'


export default function Cart() {
  const {cart} = useCart()
  console.log(cart)
  const [localItem, setLocalItem] = useState([])
  useEffect(()=>{
    const getItem = JSON.parse(localStorage.getItem('cart')) || [];
    setLocalItem(getItem)
  },[cart])



  return (
    <div className="drawer">
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <h1 className='text-3xl font-semibold text-center'>
          Shopping Cart

        </h1>
        <h2 className='text-2xl font-bold mt-4'>Total Items: { localItem.length}   </h2>
      </ul>
    </div>
  </div>
  )
}
