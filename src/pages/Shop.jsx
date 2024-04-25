import React from 'react'
import Sidebar from '../Component/Sidebar'
import Product from '../Component/Product'

function Shop() {
  return (
    <div className='flex ml-28 mt-24'>
        <div className='flex-col'>
            <Sidebar />
        </div>
        <Product />
    </div>
  )
}

export default Shop