import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Features/Cart/CartSlice";
import UserSlice from "./Features/Users/UserSlice";


export const store=configureStore({
  reducer:{
   cartState: CartSlice,
   UserState: UserSlice
  },
  devTools: process.env.NODE_ENV !== 'production', // This is usually included by default in @reduxjs/toolkit
})