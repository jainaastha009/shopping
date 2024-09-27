import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { customFetch  , generateAmount } from '../Utils';
import { useDispatch } from 'react-redux';
import { addItem } from '../Features/Cart/CartSlice';

export async function loader({ params }) {
  try {
    const response = await customFetch(`/products/${params.id}`);
    return { product: response.data.data };
  } catch (error) {
    console.error('Error fetching product:', error);
    throw new Error('Failed to load product');
  }
}

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { company, description, image, price, title, colors } = product.attributes;
    const dollarAmount = price;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount=(e)=>{
    setAmount(parseInt(e.target.value))
  }

  const cartProducts={
    cartID:product.id+color,
    productID:product.id,
    image,
    title,
    price,
    company,
    color,
    amount
  }
    
  const dispatch = useDispatch();
  const addToCart=() =>{
    dispatch(addItem({product:cartProducts  }))
  }

  const removeToCart = () =>{
    dispatch(removeToCart({product:cartProducts}))
  }
  


  return (
    <section>
      <div className='flex flex-col text-base breadcrumbs'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </div>
      <div className='grid mt-6 gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        <img
          src={image}
          alt={title}
          className='object-cover rounded-lg w-96 h-96 lg:w-full'
        />
      </div>
      <div>
        <div>
          <h1 className='text-3xl font-bold capitalize'>{title}</h1>
          <h4 className='mt-2 text-xl font-bold text-neutral-content'>{company}</h4>
        </div>
        <p className='mt-3 text-3xl'>{dollarAmount}</p>
        <p className='mt-6 leading-8'>{description}</p>
        <div className="mt-6">
        <h4 className='font-medium tracking-wider capitalize text-md'>
          Colors
        </h4>
        <div className="mt-2">
          {colors.map((e)=>{
            return(
              <button
              key={e}
              type='button'
              className={`badage w-6 h-6 mr-2 rounded-full ${
                e === color && 'border-2 border-secondary'
              }`}
              style={{background:e}}
              onClick={()=>setColor(e)}
              >
                
              </button>
            )
          })}
        </div>
      </div>
        <div className='mt-6'>
          <div>
            <label></label> 
            <h4>amount</h4>           
          </div>
          <select name='amount' id='amount' value={amount} onChange={handleAmount}>
          {generateAmount(30)}
          </select>
          <div>
            <button onClick={addToCart}>Add to Bag</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
