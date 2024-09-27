import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import { formatPrice } from '../Utils';


const ProductsGrid = () => {
  const { product } = useLoaderData();  // Providing a default empty array

  
  return (
    <div className='grid gap-4 p-4 pt-12 md:grid-cols-2 lg:grid-cols-3'>
      {product.length > 0 ? (
        product.map((e) => {        
          const { title, image, price } = e.attributes;
          // const dollarAmount = formatPrice(price);
          const dollarAmount = price;

          return (
            <Link
              key={e.id}
              to={`/products/${e.id}`}
              className='w-full transition duration-300 shadow-xl card hover:shadow-2xl'
            >
              <figure className='px-4 pt-4'>
                <img
                  src={image}
                  alt={title}
                  className='object-contain w-full h-64 rounded-xl md:h-48'
                />
                <div className='items-center text-center card-body'>
                  <h2 className='tracking-wider capitalize card-title'>{title}</h2>
                  <span className='text-secondary'>{dollarAmount}</span>
                </div>
              </figure>
            </Link>
          );
        })
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};


export default ProductsGrid;
