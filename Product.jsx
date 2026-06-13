import React, {useContext} from 'react'
import ShopContext from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import './CSS/Product.css'
import ProductDisplay from 'src/Components/ProductDisplay/ProductDisplay'
import DescriptionBox from 'src/Components/DescriptionBox/DescriptionBox'



const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((item) => item.id === parseInt(productId));
 

  if (!product) return null;

  return (
    <div className="product">
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      </div>
  )
}

export default Product
