import { useEffect, useState } from "react"
export default function useProduct(){
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch("./products.JSON")
    .then(response=>response.json())
    .then(data=>setProducts(data))
  },[])

  return {products}
}