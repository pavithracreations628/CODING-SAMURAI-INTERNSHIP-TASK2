import React from 'react'
import './Breadcrum.css'
import arrow from '../Assets/right.png'




const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className="breadcrum">
        HOME <img src={arrow} alt=""/> SHOP <img src={arrow} alt=""/>  <p>{product.category}</p> <img src={arrow} alt=""/> <h1>{product.name}</h1> 
      </div>
  )
}

export default Breadcrum
