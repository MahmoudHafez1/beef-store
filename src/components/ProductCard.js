import React from 'react'
import unavailableImg from '../assets/images/unavailable.jpg'
import placeholderImg from '../assets/images/placeholder.webp'

/**
 * Represents the product card of the products list.
 * @prop {string} title - The title of the product (Required)
 * @prop {number} price - The price of the product (Required)
 * @prop {string} description - The description of the product (Required)
 * @prop {string} imgUrl - The image url of the product (Optional)
 * @prop {boolean} isAvailable - The status of the product (Optional)
 * @prop {Function} handleAddToCart - Function to handdle add product to cart (Required)
 */

const ProductCard = ({
  title,
  price,
  description,
  imgUrl,
  isAvailable,
  handleAddToCart,
}) => {
  return (
    <div className='p-3 rounded bg-white drop-shadow-md flex flex-col sm:flex-row items-center sm:items-stretch gap-4 relative'>
      <img
        src={imgUrl || placeholderImg}
        className='w-[170px] h-[150px] object-cover'
        alt={title}
      />
      <div className='flex flex-1 flex-col items-start justify-between gap-2'>
        <div className='flex w-full justify-between'>
          <h3 className='font-bold'>{title}</h3>
          <p className='font-semibold'>${price?.toFixed(2)}</p>
        </div>
        <p className='text-left'>{description}</p>
        <button
          className='rounded-md text-sm px-4 py-2 bg-red-700 text-white disabled:bg-gray-400'
          disabled={!isAvailable}
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </div>
      {!isAvailable && (
        <img
          src={unavailableImg}
          alt='sold out'
          className='absolute left-[50%] top-[30%] w-[120px] h-[40px] rotate-[340deg] opacity-90'
        />
      )}
    </div>
  )
}

export default ProductCard
