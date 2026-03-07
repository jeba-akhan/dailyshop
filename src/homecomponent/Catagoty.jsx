import React from 'react'
import Container from '../layer/Container'

const Catagoty = () => {
  return (
    <div className='bg-amber-50 py-25'>
        <Container>
            <h1 className='font-sans font-semibold text-[28px] mb-6'>Shop by Categoy</h1>
            <div className="main grid grid-cols-5 h-50 gap-7 ">
           <div className='text-green-600 text-[16px] font-sans font-normal bg-amber-500 rounded-[10px]'></div>
           <div className='text-green-600 text-[16px] font-sans font-normal bg-amber-500 rounded-[10px]'></div>
           <div className='text-green-600 text-[16px] font-sans font-normal bg-amber-500 rounded-[10px]'></div>
           <div className='text-green-600 text-[16px] font-sans font-normal bg-amber-500 rounded-[10px]'></div>
           <div className='text-green-600 text-[16px] font-sans font-normal bg-amber-500 rounded-[10px]'></div>
          
          
            </div>
        </Container>

    </div>
  )
}

export default Catagoty