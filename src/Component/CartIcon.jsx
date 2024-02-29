import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
const CartIcon = () => {
    const {totalItems} = useCart()
  return (
    <div className='cart-icon'>
    <Link to="/cart">
        <i class="fa-solid fa-cart-shopping"></i>
        {totalItems > 0 && <span>{totalItems}</span>}
    </Link>
    </div>
  )
}

export default CartIcon