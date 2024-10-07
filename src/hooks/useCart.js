import { useState } from "react"
import addToCart from "../utilities/localstorage"
import toast from "react-hot-toast"

export default function useCart (){
  const [cart,setCart] = useState([])
  const handleAddToCart = (item) =>{
    addToCart(item)
    const newCart = [...cart,item]
    setCart(newCart)
    console.log(cart)
    toast.success('Successfully Added to cart!')
   }

   return {handleAddToCart,cart}
}