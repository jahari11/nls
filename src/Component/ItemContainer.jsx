import React, { useState } from 'react'
import storedata from '../Data/storedata'
import { Link } from 'react-router-dom'
import InputFilter from './InputFilter'

const ItemContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = storedata.filter((item)=> item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  return (
    <>
    <InputFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <div className='item-grid'>
        {filteredItems.map(item=> (
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
    </>
  )
}

export default ItemContainer