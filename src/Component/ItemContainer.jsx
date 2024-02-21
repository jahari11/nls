import React from 'react'
import storedata from '../Data/storedata'
import { Link } from 'react-router-dom'

const ItemContainer = () => {
  return (
    <div className='item-grid'>
        {storedata.map(item=> (
                
            <div key={item.id} className='item-card'>
                <img src={item.image} alt="" />
                <div className="item-details">
                    <span className='item-name'>{item.name}</span>
                    <span className='item-price'>$ {item.price}.00</span>
                </div>
                <Link to={`/shop-item/${item.id}`}>
                <button className='item-o-btn'>See More</button>
                </Link>
            </div>
            
        ))}
    </div>
  )
}

export default ItemContainer