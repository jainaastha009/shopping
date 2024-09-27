import React from 'react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../Utils'

const Carttotal = () => {

  const {cartTotal,shipping,tax,orderTotal} =   useSelector((state)=>state.cartState)

  return (
    <div className='card bg-base-200'>
      <div className="card-body">
        {/* {SUBTOTAL} */}
        <p className='flex justify-between pb-2 text-xs border-b border-base-300'>
          <span>SubTotal</span>
          <span className='font-medium'>{formatPrice(cartTotal)}</span>
        </p>
                {/* {SUBTOTAL} */}
                <p className='flex justify-between pb-2 text-xs border-b border-base-300'>
          <span>Shipping</span>
          <span className='font-medium'>{formatPrice(shipping)}</span>
        </p>
        {/* {SUBTOTAL} */}
        <p className='flex justify-between pb-2 text-xs border-b border-base-300'>
          <span>SubTotal</span>
          <span className='font-medium'>{formatPrice(tax)}</span>
        </p>
        {/* {SUBTOTAL} */}
        <p className='flex justify-between pb-2 text-xs border-b border-base-300'>
          <span>SubTotal</span>
          <span className='font-medium'>{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  )
}

export default Carttotal
