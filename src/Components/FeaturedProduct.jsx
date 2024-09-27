import React from 'react'
import SectionTitle from './SectionTitle'
import ProductsGrid from './ProductsGrid'

const FeaturedProduct = () => {
  return (
    <div className='pt-8'>
        <SectionTitle text='Our Collections'/>
        <ProductsGrid/>
    </div>
  )
}

export default FeaturedProduct
