import React, { useState } from 'react'
import storedata from '../Data/storedata'
import { useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const Item = () => {

  const { addItem } = useCart();
    const {id} = useParams();
    const product = storedata.find(product => product.id === parseInt(id));

    const [addedToCart, setAddedToCart] = useState(false);
    if (!product) {
        return <div>Product not found</div>
    }

    const handleAddToCart = () => {
      addItem(product, 1);
      setAddedToCart(true)
    }
  return (
    <div className="product-card-container">
    <div className='product-card'>
        <img src={product.image} alt="" />
        <div className="product-card-dets">
        <h2 className='product-name'>{product.name}</h2>
        <span className='product-price'>${product.price}.00</span>
        <p className='product-description'>{product.description}</p>
        <p className='product-c-description'>{product.condition_description}</p>
        <button onClick={handleAddToCart} disabled={addedToCart}>{addedToCart ? "Added to Cart" : "Add to Cart"}</button>
        </div>
    </div>
    </div>
  )
}

export default Item