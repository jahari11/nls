import React from 'react';
import { useCart } from 'react-use-cart';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  return (
    <>
      <Navbar />
      <div className='cart-container'>
        {isEmpty ? (
          <p className='is-empty'>Uh oh, Your cart is empty.</p>
        ) : (
          <div className='cart-sub-container'>
            <h2 className='cart-text'>Cart</h2>
            <p className='total-items-cart'>Total items: {totalItems}</p>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.id} className='cart-item'>
                  <img src={item.image} alt="" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <button onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className='cart-total'>
            <p>Total: ${cartTotal}</p>
            <button onClick={() => emptyCart()}>Empty Cart</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
