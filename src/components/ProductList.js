import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  return (
    <div>
      {Object.keys(products)?.map((key) => (
        <ProductCard
          key={key}
          title={products[key].title}
          description={products[key].description}
          price={products[key].price}
          imgUrl={products[key].imgUrl}
          isAvailable={products[key].status === 'available'}
        />
      ))}
    </div>
  )
}

export default ProductList
