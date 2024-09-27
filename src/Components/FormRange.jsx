import React, { useState } from 'react';
// import { formatPrice } from '../Utils';

const FormRange = ({ label, name, size, Price }) => {
  const step = 1000;
  const maxPrice = 100000;
  const minPrice = 100;
  const [selectPrice, setSelectPrice] = useState(Price || maxPrice);

  const handleRangeChange = (e) => {
    setSelectPrice(Number(e.target.value)); // Convert string to number
  };

  return (
    <div className='form-control'>
      <label htmlFor={name} className='cursor-pointer label'>
        <span className='capitalize label-text'>{label}</span>
        {/* <span>{formatPrice(selectPrice)}</span> */}
        <span>{selectPrice}</span>
      </label>
      <input
        type='range'
        name={name}
        min={minPrice}
        max={maxPrice}
        value={selectPrice}
        onChange={handleRangeChange}
        className={`range range-primary ${size}`}
        step={step}
      />
      <div className='flex justify-between w-full px-2 mt-2 text-xs'>
        <span className='font-bold text-md'>Min: {minPrice}</span>
        <span className='font-bold text-md'>Max: {maxPrice}</span>
      </div>
    </div>
  );
};

export default FormRange;
