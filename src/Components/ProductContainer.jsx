import React, { useState } from 'react'
import ProductsGrid from './ProductsGrid'
import ProductList from './ProductList'
import { useLoaderData } from 'react-router-dom'
import { BsFillGridFill, BsList } from 'react-icons/bs';

const ProductContainer = () => {
  const {meta}= useLoaderData();
  const totalProducts=meta.pagination.total
  const[layout,setlayout]=useState('grid');

  const setActiveStyle =(pattern)=>{
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout ? 'btn-primary text-primary-content':'btn-ghost text-base-content'}`
    }
  

  return (

    <>
        <div className='flex items-center justify-between pb-5 mt-8 border-b border-base-300'>
      <h4 className='font-medium text-md'></h4>
      <div className='flex gap-x-2'>
        <button type='button' onClick={()=>setlayout('grid')} className={setActiveStyle('grid')} >
          <BsFillGridFill/>
        </button>
        <button type='button' onClick={()=>setlayout('list')} className={setActiveStyle('list')} >
          <BsList/>
        </button>
      </div>
      </div>
      {/* // {Product} */}
      <div>
          {totalProducts === 0 ? (
          <h5 className='mt-16 text-2xl'>Sorry, No products</h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductList />
        )}
      </div>
    </>

  )
}


export default ProductContainer
