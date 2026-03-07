import React from 'react'
import Container from '../layer/Container'
import mango from '../assets/mango.jpg'
import greap from '../assets/greap.jpg'
import orange from '../assets/orang2.jpg'
import banana from '../assets/banana2.jpg'
import paineapple from '../assets/pineapple.jpg'
import apple from '../assets/apple2.jpg'
import stro from '../assets/strob.jpg'
import water from '../assets/water.jpg'
import khejur from '../assets/khejur.jpg'
import anar from '../assets/anar.jpg'


const Froit = () => {
  return (
    <div className='bg-green-200 pt-10'>
        <Container>
    <div className=' bg-amber-50 flex gap-7 py-20 mt-20 px-8'>
    <div className='w-75 h-50'>
        <img className='w-full h-full' src={apple} alt="" />
        <div className='flex justify-between mt-4'>
            <h4 className='text-green-600 text-[16px] font-sans font-normal'>mango</h4>
            <span className='text-green-600 text-[16px] font-sans font-normal'>price 500tk</span>
        </div>
    </div>
    <div className='w-75 h-50'>
        <img className='w-full h-full' src={greap} alt="" />
        <div className='flex justify-between mt-4'>
            <h4 className='text-green-600 text-[16px] font-sans font-normal'>Greaps</h4>
            <span className='text-green-600 text-[16px] font-sans font-normal'>price 600tk</span>
        </div>
    </div>
    <div className='w-75 h-50'>
        <img className='w-full h-full' src={orange} alt="" />
        <div className='flex justify-between mt-4'>
            <h4 className='text-green-600 text-[16px] font-sans font-normal'>Orange</h4>
            <span className='text-green-600 text-[16px] font-sans font-normal'>price 550tk</span>
        </div>
    </div>

    <div className='w-75 h-50'>
        <img className='w-full h-full' src={banana} alt="" />
        <div className='flex justify-between mt-4'>
            <h4 className='text-green-600 text-[16px] font-sans font-normal'>Banana</h4>
            <span className='text-green-600 text-[16px] font-sans font-normal'>price 50tk</span>
        </div>
    </div>

    <div className='w-75 h-50'>
        <img className='w-full h-full' src={paineapple} alt="" />
        <div className='flex justify-between mt-4'>
            <h4 className='text-green-600 text-[16px] font-sans font-normal'>Paineapple</h4>
            <span className='text-green-600 text-[16px] font-sans font-normal'>price 40tk</span>
        </div>
    </div>
    

    </div>

    <div className=' bg-amber-50 flex gap-7 py-20 px-8'>
    <div className='w-75 h-50'>
        <img className='w-full' src={mango} alt="" />
        <div className='flex justify-between mt-4'>
            <h4 className='text-green-600 text-[16px] font-sans font-normal'>mango</h4>
            <span className='text-green-600 text-[16px] font-sans font-normal'>price 500tk</span>
        </div>
    </div>
    <div className='w-75 h-50'>
        <img className='w-full h-full' src={stro} alt="" />
        <div className='flex justify-between mt-4'>
            <h4 className='text-green-600 text-[16px] font-sans font-normal'>Strobery</h4>
            <span className='text-green-600 text-[16px] font-sans font-normal'>price 1000tk</span>
        </div>
    </div>
    <div className='w-75 h-50'>
        <img className='w-full h-full' src={water} alt="" />
        <div className='flex justify-between mt-4'>
            <h4 className='text-green-600 text-[16px] font-sans font-normal'>Watermiloin</h4>
            <span className='text-green-600 text-[16px] font-sans font-normal'>price 550tk</span>
        </div>
    </div>

    <div className='w-75 h-50'>
        <img className='w-full h-full' src={khejur} alt="" />
        <div className='flex justify-between mt-4'>
            <h4 className='text-green-600 text-[16px] font-sans font-normal'>khejur</h4>
            <span className='text-green-600 text-[16px] font-sans font-normal'>price 1200tk</span>
        </div>
    </div>

    <div className='w-75 h-50'>
        <img className='w-full h-full' src={anar} alt="" />
        <div className='flex justify-between mt-4'>
            <h4 className='text-green-600 text-[16px] font-sans font-normal'>Dalim</h4>
            <span className='text-green-600 text-[16px] font-sans font-normal'>price 40tk</span>
        </div>
    </div>
    

    </div>
    
        </Container>
    </div>
  )
}

export default Froit