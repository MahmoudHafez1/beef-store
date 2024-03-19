import React from 'react'
import ProductForm from '../../../components/ProductForm'

const Inventory = ({
  products,
  handleEditProduct,
  handleAddProduct,
  reloadSampleData,
}) => {
  return (
    <div className='h-[100vh] overflow-auto border-[2px] border-black p-2'>
      <h2 className='text-center font-bold text-[20px] mb-4'>Inventory</h2>
      <div className='flex flex-col gap-4'>
        {Object.keys(products)?.map((key) => (
          <ProductForm
            key={key}
            product={products[key]}
            productId={key}
            handleEditProduct={handleEditProduct}
          />
        ))}
      </div>
      <div className='font-semibold text-lg text-center my-4'>
        Add New Product
      </div>
      <ProductForm handleAddProduct={handleAddProduct} />
      <button
        onClick={reloadSampleData}
        className='btn p-2 bg-white hover:bg-gray-50 rounded mt-2 shadow px-4'
      >
        Reload Sample Data
      </button>
    </div>
  )
}

export default Inventory
