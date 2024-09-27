import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import { formatPrice } from '../Utils';

const ProductList = () => {
    const { product } = useLoaderData();  // Providing a default empty array
    console.log('product',product.length);
  
    
    return (
      <div className='grid mt-12 gap-y-8'>
        {product.length > 0 ? (
          product.map((e) => {        
            const { title, image, price ,company} = e.attributes;
            // const dollarAmount = formatPrice(price);
            const dollarAmount = price;

            return (
              <Link
                key={e.id}
                to={`/products/${e.id}`}
                className='flex flex-col flex-wrap p-8 duration-300 rounded-lg shadow-xl sm:flex-row gap-y-4 bg-base-100 hover:shadow-2xl group'
              >
                  <img
                    src={image}
                    alt={title}
                    className='object-cover w-24 h-24 transition duration-300 rounded-lg sm:h-32 sm:w-32 group-hover:scale-105'
                  />
                  {/* <div className='items-center text-center card-body'>
                    <h2 className='tracking-wider capitalize card-title'>{title}</h2>
                    <span className='text-secondary'>{dollarAmount}</span>
                  </div> */}
                  <div className='ml-0 sm:ml-16'>
                    <h3 className='text-lg font-medium capitalize'>{title}</h3>
                    <h3 className='capitalize text-md text-neutral-content'>{company}</h3>
                  </div>
                  <p className='ml-0 text-lg font-medium sm:ml-auto'>
                    {dollarAmount}
                  </p>
              </Link>
            );
          })
        ) : (
          <p>No products available</p>
        )}
      </div>
    );
}

export default ProductList
