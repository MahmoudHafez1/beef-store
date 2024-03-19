import React from 'react'
import ProductCard from '../../../components/ProductCard'

const ProductList = ({ products, handleAddToCart }) => {
  return (
    <div className=' h-[100vh] overflow-auto border-[2px] border-black p-2'>
      <h1 className='mb-[10px] text-center font-bold text-[40px] text-red-700'>
        Beef Store
      </h1>
      <h2 className='text-center font-bold text-[20px] mb-3'>Products List</h2>
      <div className='flex flex-col gap-4'>
        {Object.keys(products)?.map((key) => (
          <ProductCard
            key={key}
            title={products[key].title}
            description={products[key].description}
            price={products[key].price}
            imgUrl={products[key].imgUrl}
            isAvailable={products[key].status === 'available'}
            handleAddToCart={() => handleAddToCart(key)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
