import React from 'react';
import { useSelector } from 'react-redux';
import SectionTitle from '../Components/SectionTitle';
import CheckoutForm from '../Components/CheckoutForm';
import Carttotal from '../Components/Carttotal';
import { redirect } from 'react-router-dom';
import { store } from '../Store';

export const loader = () => {
  const state = store.getState();  // Accessing the store directly
  const user = state.UserState.user;
  
  if (!user) {
    return redirect('/login');
  } else {
    return null;
  }
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);

  if (cartTotal === 0) {
    return <SectionTitle text='Your Cart is Empty' />;
  }

  return (
    <>
      <SectionTitle text='Place your order' />
      <div className='grid items-start gap-8 mt-8 md:grid-cols-2'>
        <CheckoutForm />
        <Carttotal />
      </div>
    </>
  );
};

export default Checkout;
