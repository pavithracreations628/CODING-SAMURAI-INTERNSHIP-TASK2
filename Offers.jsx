import React from 'react'
import './Offers.css'
import purple from '../Assets/purple lehanga.png'

const Offers = () => {
  return (
    <div className="offers">
        <div className="offer-left">
            <h1>Exclusive Offers</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img  src={purple} alt=""/>
        </div>
    </div>
  )
}

export default Offers
