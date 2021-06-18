import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

const ProductGrid = () => {
  const products = useSelector(state => state.product)
  console.log(products)
  return (
    <div className="product-grid">
    {
      products.map(product => (
        <ProductItem key={product.id} product={product}/>
      ))
    }
      
      
    </div>
  )
}

export default ProductGrid
