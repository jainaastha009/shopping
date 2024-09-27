import React from 'react'
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { Form, redirect } from 'react-router-dom';
import { store } from '../Store';
import { customFetch, formatPrice } from '../Utils';
import { clearcart } from '../Features/Cart/CartSlice';

export const actions = async ({ request }) => {
  const formData = await request.formData();
  const { name, address } = Object.fromEntries(formData);
  const user = store.getState().UserState.user;
  const { cartItems, orderTotal, numItemInCart } = store.getState().cartState;
  const info = {
    name,
    address,
    chargeTotal:orderTotal,
    orderTotal:formatPrice(orderTotal),
    cartItems,
    numItemsInCart: numItemInCart, // Correct key name
  };

  try {
    const res = await customFetch.post(
      '/orders', 
      { data: info }, 
      {
        headers: {
          Authorization: `Bearer ${user.jwt}`, 
        }
      }
    );
    store.dispatch(clearcart());
    return redirect('/orders');
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || 'There was an error processing the order';
    if (error.response.status === 401 || 403) return redirect('/login');
    return null;
  }
};



const CheckoutForm = () => {
  return (
    <Form method='POST' className ='flex flex-col gap-y-4'>
       <h4 className='text-xl font-medium capitalize'>Shipping Information</h4>
       <FormInput label='first name' name='name' type='text'/>
       <FormInput label='address' name='address' type='text'/>
        <div className="mt-4">
          <SubmitBtn text='Place Your order'/>
        </div>
    </Form>
  )
}

export default CheckoutForm
