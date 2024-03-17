import React from 'react'

const ProductCard = ({ title, price, description, imgUrl, isAvailable }) => {
  return (
    <div className='p-3 rounded bg-white drop-shadow-md flex gap-4'>
      <img
        src={imgUrl}
        className='w-[170px] h-[150px] object-cover'
        alt={title}
      />
      <div className='flex flex-1 flex-col items-start justify-between gap-2'>
        <div className='flex w-full justify-between'>
          <h2 className='font-bold'>{title}</h2>
          <p className='font-semibold'>{price.toFixed(2)}$</p>
        </div>
        <p className='text-left'>{description}</p>
        <button
          class='rounded-md text-sm px-4 py-2 bg-red-700 text-white disabled:bg-gray-400'
          disabled={!isAvailable}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  )
}

export default ProductCard
