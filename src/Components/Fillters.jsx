import React from 'react'
import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from '../Components/FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'

const Fillters = () => {
  const{meta,params}=useLoaderData();

  return (
    <Form  className='grid items-center px-8 py-4 rounded-md gap-x-4 bg-base-200 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    {/* {Seach} */}

      <FormInput
      type='search'
      label='search Product'
      name='search'
      size='input-sm'
      defaultValue={params.search}
      />
              {/* {COMPANY} */}

       <FormSelect lable='Select company'
        name='company'
         list={meta.companies}
          size='select-sm' 
          defaultvalue={params.company}/>
    {/* {CATEGORIES} */}

    <FormSelect lable='Select Categories' name='Categories' list={meta.categories}
    size='select-sm' defaultvalue={params.Categories} />
            {/* {ORDER} */}
            <FormSelect lable='sort By' name='order' 
            list={['a-z','z-a','high','Low']} 
            size='select-sm'
            defaultvalue={params.order}
            />
            {/* PRICE */}
            

       <FormRange name='Price' label='Select Price' size='range-sm' price={params.Price}/>
                   {/* SHIPPING */}
        <FormCheckbox name='shipping' label='free Shipping' size='checkbox' defaultValue={params.shipping}/>

      <button type='submit' className='btn btn-primary btn-sm'>Search</button>
      <Link to='/Products' className='btn btn-accent btn-sm'>reset</Link>
    </Form>
   

  )
}

export default Fillters
