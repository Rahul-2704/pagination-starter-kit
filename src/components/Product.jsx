import React from 'react'

const Product = ({image,title}) => {
  return (
    <div className='product-card'>
      <img className='product-img' src={image} alt={title}/>
      <span>{title}</span>
    </div>
  )
}

export default Product