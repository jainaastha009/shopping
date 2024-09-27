import React from 'react'
import { store } from '../Store';
import { redirect, useLoaderData } from 'react-router-dom';
import { customFetch } from '../Utils';
import SectionTitle from '../Components/SectionTitle';
import OrderList from '../Components/OrderList';
import PaginationConatiner from '../Components/PaginationConatiner';

export const loader = async ({ request }) => {

const user = store.getState().UserState.user;
if(!user){
  return redirect('/login')
}
const params= Object.fromEntries([
  ...new URL(request.url).searchParams.entries(),
])

try {
  const response = await customFetch.get('/orders',{
    params,
    headers:{
      Authorization:`Bearer ${user.jwt}`
    }
  });
  const order=response.data.data;
  const meta=response.data.meta
  console.log(order);
  
  return{order:order,meta:meta,params:params}
} catch (error) {
  const errorMeaage=error?.response?.data?.error?.message || 'there has been error'
  console.log(errorMeaage);
  if(error.response.status === 401 || 403) return redirect('/login');
  return null;
}
};


const Orders = () => {
  const meta= useLoaderData();
  if(meta.pagination.total < 1){
    return<SectionTitle text="please make an order"/>
  }
  return (
   <>
   <SectionTitle text='Your Order'/>
   <OrderList/> 
   <PaginationConatiner/>
   </>
  )
}

export default Orders
