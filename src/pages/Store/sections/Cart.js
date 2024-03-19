import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div className='h-[100vh] overflow-auto border-[2px] border-black p-2'>
      <h2 className='text-center font-bold text-[20px] mb-4'>Shopping Cart</h2>

      {cartItems?.map((item) => (
        <div key={item.id}>
          {item.status === 'available' ? (
            <div className='flex justify-between items-center mb-2'>
              <p>{`${item.quantity} x ${item.title}`}</p>
              <p>${(item.price * item.quantity)?.toFixed(2)}</p>
            </div>
          ) : (
            <p className='mb-2'>{`Sorry ${item.title} is no longer available`}</p>
          )}
        </div>
      ))}

      <div className='w-full h-[2px] bg-black mt-4 mb-2'></div>

      {cartItems?.length > 0 && (
        <div className='flex justify-between items-center'>
          <p>Total</p>
          <p className='font-bold'>
            $
            {cartItems
              ?.reduce(
                (totalPrice, currentItem) =>
                  totalPrice +
                  (currentItem.status === 'available'
                    ? currentItem.price * currentItem.quantity
                    : 0),
                0
              )
              .toFixed(2)}
          </p>
        </div>
      )}
    </div>
  )
}

export default Cart
