import React from 'react'

export default function Product({product, handleAddToCart}) {
 const {img, name, id,availability, description, price, review} =product


  return (
    <div className="card bg-base-100 shadow-xl">
    <figure>
      <img
        src={img}
        alt={name} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>

      <h2>&#36;{price}</h2>
      <p></p>
      <h2>
        {availability === true ? "Available" : "Not Available"}
      </h2>

      <div className="card-actions justify-end">
        <button className="btn btn-primary" 
        onClick={()=>handleAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  </div>
  )
}
