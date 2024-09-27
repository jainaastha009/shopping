import React from 'react';
import Fillters from '../Components/Fillters';
import PaginationConatiner from '../Components/PaginationConatiner';
import ProductContainer from '../Components/ProductContainer';
import { customFetch } from '../Utils';

export const loader = (queryClient)=> async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch('/products', {
    params,
  });

  const products = response.data.data;
  const meta = response.data.meta;

  return { product: products, meta: meta, params: params };
};


const Products = () => {
  return (
    <>
      <Fillters />
      <ProductContainer />
      <PaginationConatiner />
    </>
  );
}

export default Products;
