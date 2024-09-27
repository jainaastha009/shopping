import React from 'react'
import { generateAmount } from '../Utils'
import { useDispatch } from 'react-redux'
import { editItem, removeItem } from '../Features/Cart/CartSlice';

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();

  const removeItemfromcart = () => {
    dispatch(removeItem({ cartID: cartItem.cartID }));
  }

  const handleAmount = (e) => {
    dispatch(editItem({ product: cartItem.cartID, amount: parseInt(e.target.value) }));
  }
  
  return (
    <article className='flex flex-col flex-wrap pb-6 mb-12 border-b gap-y-4 sm:flex-row border-base-300 last:border-b-0'>
      {/* {Image} */}
      <img 
        src={cartItem.image} 
        alt={cartItem.title}
        className='object-cover w-24 h-24 rounded-lg sm:h-32 sm:w-32'
      />
      
      {/* {INFO} */}
      <div className="sm:ml-6">
        <h3 className='font-serif capitalize'>{cartItem.title}</h3>
        <h4 className='text-sm capitalize text-neutral-content'>{cartItem.company}</h4>
        <p className='flex items-center mt-2 text-sm capitalize gap-x-2'>
          Color:
          <span className='badge badge-sm' style={{ backgroundColor: cartItem.color }}>
          </span>
        </p>
      </div>

      {/* {Amount and Remove Button} */}
      <div className='sm:ml-24'>
        <div className='max-w-xs form-control'>
          <label htmlFor='amount' className='p-0 label'>
            <span className='label-text'>Amount</span>
          </label>
          <select
            name='amount'
            id='amount'
            className='mt-2 select-base select select-bordered select-xs'
            value={cartItem.amount}
            onChange={handleAmount}
          >
            {generateAmount(cartItem.amount + 5)}
          </select>
        </div>
        <button 
          className='mt-3 text-sm link-primary link-hover'
          onClick={removeItemfromcart}
        >
          Remove
        </button>
      </div>
    </article>
  )
}

export default CartItem;
