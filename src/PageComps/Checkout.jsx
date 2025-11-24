import React from 'react'
import Rightside from './subcomps/SubCheckout/Rightside'
import Leftside from './subcomps/SubCheckout/Leftside'

function Checkout() {
  return (
    <>
<div  className='flex mt-18 h-200    pb-20'>
    <div className='w-170 pl-35 pt-10 pr-5 h-200 overflow-scroll div  '>
        <Rightside/>
        </div>
        <div className='w-160 bg-gray-200  h-200'>
            <Leftside/>
        </div>
</div>
    </>
  )
}

export default Checkout