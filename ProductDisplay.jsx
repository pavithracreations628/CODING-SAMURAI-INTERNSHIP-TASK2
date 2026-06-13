import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star.png'
import star1 from '../Assets/star (2).png'
import ShopContext from 'src/Context/ShopContext'


const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            
        </div>
        <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={product.image} alt=""/>
        </div>
        </div>
        <div className="productdisplay-right">
         <h1>
            {product.name}
         </h1>
         <div className="productdisplay-right-star">
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star} alt=""/>
              <img src={star1} alt=""/>
              <p>(122)</p>
         </div>
         <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
         </div>
         <div className="productdisplay-right-description">
            <p>The {product.name} is a must-have in your wardrobe. It's made from high-quality material and designed for comfort and style.
                This versatile piece can be dressed up or down, making it perfect for any occasion. Whether you're heading to a casual outing or a night out, the {product.name} will keep you looking fashionable and feeling confident. Don't miss out on this essential addition to your collection!
            </p>
         </div>
         <div className="productdisplay-right-size">
            <h3>Select Size</h3>
            <div className="productdisplay-right-sizes">
                <div >S</div>
                <div >M</div>
                <div >L</div>
                <div>XL</div>
            </div>
            <button onClick={() => addToCart(product.id)}>Add To Cart</button>
            <p className="productdisplay-right-size-category"><span>Category: </span>{product.category}, T-shirt, Crop-top</p>
            <p className="productdisplay-right-size-category"><span>Tags: </span>Modern,  Latest</p>
        </div>
        </div>
      
    </div>
  )
}

export default ProductDisplay

