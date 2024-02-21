import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
const CartIcon = () => {
    const {totalItems} = useCart()
  return (
    <Link to="/cart">
        <i class="fa-solid fa-cart-shopping"></i>
        {totalItems > 0 && <span>{totalItems}</span>}
    </Link>
  )
}

export default CartIcon