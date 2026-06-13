import React from 'react'
import NewCollections from 'src/Components/NewCollections/NewCollections'
import NewsLetter from 'src/Components/NewsLetter/NewsLetter'
import Offers from 'src/Components/Offers/Offers'
import Popular from 'src/Components/Popular/Popular'
import Hero from './../Components/Hero/Hero'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
