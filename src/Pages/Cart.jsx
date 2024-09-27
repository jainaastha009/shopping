import React from 'react';
import { useSelector } from 'react-redux';
import SectionTitle from '../Components/SectionTitle';
import CartItemList from '../Components/CartItemList';
import Carttotal from '../Components/Carttotal';
import { Link } from 'react-router-dom';

const Cart = () => {
  const user = useSelector((state) =>  state.UserState.user);
  const numItemInCart = useSelector((state) => state.cartState.numItemInCart);
  console.log(numItemInCart);

  if (numItemInCart === 0) {
    return <SectionTitle text='Your Cart Is Empty' />;
  }

  return (
    <>
      <SectionTitle text='Cart'/>
      <div className="flex flex-col w-full lg:flex-row lg:justify-between">
        <div className="flex justify-center w-full lg:w-8/12">
          {/* Right Side (Cart Content) */}
          <CartItemList />
        </div>
        <div className="grid flex-grow h-32 rounded-box place-items-center lg:w-4/12">
          {/* Left Side (Cart Items) */}
          <div className="w-full p-4">
            <div className="space-y-4">
              <Carttotal />
              {user ? (
                <Link to="/checkout" className="mt-8 btn btn-primary btn-block">
                  Proceed to Checkout
                </Link>
              ) : (
                <Link to="/login" className="mt-8 btn btn-primary btn-block">
                  Proceed to Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
