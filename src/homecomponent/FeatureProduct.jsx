import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../layer/Container'
import sobji from '../assets/sobji.jpg'
import fish from '../assets/fish.jpg'
import chiken from '../assets/chiken.jpg'
import oil from '../assets/oil.jpg'
import egg from '../assets/egg.jpg'
import milk from '../assets/milk.jpg'
import shak from '../assets/shak.jpg'
import rich from '../assets/rice.jpg'
import dal from '../assets/dal.jpg'
import beef from '../assets/chikenbeef.jpg'


const FeatureProduct = () => {
  return (
    <div className='py-20 '>
       <Container className=''>
         <div className=' bg-gray-200 flex gap-7 py-20 mt-20 px-8'>
             <div className='w-75 h-50'>
                 <img className='w-full h-full' src={sobji} alt="" />
                 <div className='flex justify-between mt-4'>
                     <h4 className='text-green-600 text-[16px] font-sans font-normal'>Vegetbles</h4>
                     <span className='text-green-600 text-[16px] font-sans font-normal'>price 100tk</span>
                 </div>
             </div>
             <div className='w-75 h-50'>
                 <img className='w-full h-full' src={fish} alt="" />
                 <div className='flex justify-between mt-4'>
                     <h4 className='text-green-600 text-[16px] font-sans font-normal'>hilsha</h4>
                     <span className='text-green-600 text-[16px] font-sans font-normal'>price 2000tk</span>
                 </div>
             </div>
             <div className='w-75 h-50'>
                 <img className='w-full h-full' src={chiken} alt="" />
                 <div className='flex justify-between mt-4'>
                     <h4 className='text-green-600 text-[16px] font-sans font-normal'>Chiken</h4>
                     <span className='text-green-600 text-[16px] font-sans font-normal'>price 250tk</span>
                 </div>
             </div>
         
             <div className='w-75 h-50'>
                 <img className='w-full h-full' src={oil} alt="" />
                 <div className='flex justify-between mt-4'>
                     <h4 className='text-green-600 text-[16px] font-sans font-normal'>oil</h4>
                     <span className='text-green-600 text-[16px] font-sans font-normal'>price 1050tk</span>
                 </div>
             </div>
         
             <div className='w-75 h-50'>
                 <img className='w-full h-full' src={egg} alt="" />
                 <div className='flex justify-between mt-4'>
                     <h4 className='text-green-600 text-[16px] font-sans font-normal'>Egg</h4>
                     <span className='text-green-600 text-[16px] font-sans font-normal'>price 300tk</span>
                 </div>
             </div>
             
         
             </div>
         
             <div className=' bg-gray-200 flex gap-7 py-20 px-8'>
             <div className='w-75 h-50'>
                 <img className='w-full' src={milk} alt="" />
                 <div className='flex justify-between mt-4'>
                     <h4 className='text-green-600 text-[16px] font-sans font-normal'>Milk</h4>
                     <span className='text-green-600 text-[16px] font-sans font-normal'>price 150tk</span>
                 </div>
             </div>
             <div className='w-75 h-50'>
                 <img className='w-full h-full' src={shak} alt="" />
                 <div className='flex justify-between mt-4'>
                     <h4 className='text-green-600 text-[16px] font-sans font-normal'>Strobery</h4>
                     <span className='text-green-600 text-[16px] font-sans font-normal'>price 1000tk</span>
                 </div>
             </div>
             <div className='w-75 h-50'>
                 <img className='w-full h-full' src={rich} alt="" />
                 <div className='flex justify-between mt-4'>
                     <h4 className='text-green-600 text-[16px] font-sans font-normal'>Rich</h4>
                     <span className='text-green-600 text-[16px] font-sans font-normal'>price 55tk</span>
                 </div>
             </div>
         
             <div className='w-75 h-50'>
                 <img className='w-full h-full' src={dal} alt="" />
                 <div className='flex justify-between mt-4'>
                     <h4 className='text-green-600 text-[16px] font-sans font-normal'>Dal</h4>
                     <span className='text-green-600 text-[16px] font-sans font-normal'>price 1200tk</span>
                 </div>
             </div>
         
             <div className='w-75 h-50'>
                 <img className='w-full h-full' src={beef} alt="" />
                 <div className='flex justify-between mt-4'>
                     <h4 className='text-green-600 text-[16px] font-sans font-normal'>beef</h4>
                     <span className='text-green-600 text-[16px] font-sans font-normal'>price 700tk</span>
                 </div>
             </div>
             
         
             </div>
       </Container>

    </div>
  )
}

export default FeatureProduct