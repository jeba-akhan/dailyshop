import React from 'react'
import Container from '../layer/Container'
import orange from '../assets/or.png'
import fish from '../assets/fresh logo.webp'
import vege from '../assets/vege.png'
import beef from '../assets/beef.jpg'
import rice from '../assets/rice.jpg'
import { Link } from 'react-router-dom'



const Catagoty = () => {


  return (
    <div className=' py-15'>
        <Container className=" px-8">
            <h1 className='font-sans font-semibold text-[28px] mb-6 text-green-700'>Shop by Categoy</h1>
            <div className="main grid grid-cols-5 h-50 gap-7 ">
           <div className=' relative text-green-600 text-[16px] font-sans font-normal bg-gray-200 rounded-[10px]'>
            <div className='w-8 h-8 absolute top-1/2 left-1/2 -translate-y-1/2'>
               <Link to='/frout'>
                <img className='w-full' src={orange} alt="" />
               </Link>
                <span className='font-sans text-[18px] font-normal'>Fruit</span>
            </div>
           </div>

           <div className='relative text-green-600 text-[16px] font-sans font-normal bg-gray-400 rounded-[10px]'>
            <div className='w-10 h-8 absolute top-1/2 left-1/2 -translate-y-1/2'>
                <Link>
                <img className='w-full' src={vege} alt="" />
                </Link>
                <span className='font-sans text-[18px] font-normal'>Vegetable</span>
            </div>
           </div>
           <div className='relative text-green-600 text-[16px] font-sans font-normal bg-green-100 rounded-[10px]'>
            <div className='w-8 h-8 absolute top-1/2 left-1/2 -translate-y-1/2'>
                <Link>
                <img className='w-full' src={fish} alt="" />
                </Link>
                <span className='font-sans text-[18px] font-normal'>Fish</span>
            </div>
           </div>
           <div className='relative text-green-600 text-[16px] font-sans font-normal bg-gray-200 rounded-[10px]'>
            <div className='w-8 h-8 absolute top-1/2 left-1/2 -translate-y-1/2'>
                <Link>
                <img className='w-full' src={beef} alt="" />
                </Link>
                <span className='font-sans text-[18px] font-normal'>Chiken</span>
            </div>
           </div>
           <div className='relative text-green-600 text-[16px] font-sans font-normal bg-orange-100 rounded-[10px]'>
            <div className='w-8 h-8 absolute top-1/2 left-1/2 -translate-y-1/2'>
                <Link>
                <img className='w-full' src={rice} alt="" />
                </Link>
                <span className='font-sans text-[18px] font-normal'>Others</span>
            </div>
           </div>
         
          
          
            </div>
        </Container>

    </div>
  )
}

export default Catagoty