import React from 'react'

const InputFilter = ({searchTerm, setSearchTerm}) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  };

  return (
    <div className='item-search'>
      <span>Serach Items:</span>
    <input className='item-value' 
    type='text'
    placeholder='Search'
    value={searchTerm}
    onChange={handleInputChange} />
    <button>
    <i class="fa-solid fa-filter"></i>
    </button>
    </div>
  )
}

export default InputFilter