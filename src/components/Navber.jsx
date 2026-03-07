import React from 'react'
import Container from '../layer/Container'

import { Link } from 'react-router-dom'
import { FcShop } from 'react-icons/fc'
const Navber = () => {
  return (
    <nav className='bg-green-50'>
        <Container>
           <div className='flex justify-between items-center py-7 px-5'>

         <div className='flex gap-3 items-center'>
           <span><FcShop /></span>
          <div className="logo font-extrabold text-2xl text-green-800 italic">BAZAARDHOR
         </div>
         </div>

         <div className="menu ">
          <ul className='flex gap-12 items-center justify-center'>
            <li>
              <Link className='text-[24px] font-sans transition-all duration-300 hover:text-green-800 text-green-600'>Home</Link>
            </li>
            <li>
              <Link className='text-[24px] font-sans transition-all duration-300 hover:text-green-800 text-green-600'>About</Link>
            </li>
            <li>
              <Link className='text-[24px] font-sans transition-all duration-300 hover:text-green-800 text-green-600'>Shop</Link>
            </li>
            <li>
              <Link className='text-[24px] font-sans transition-all duration-300 hover:text-green-800 text-green-600'>Category</Link>
            </li>
            <li>
              <Link className='text-[24px] font-sans transition-all duration-300 hover:text-green-800 text-green-600'>Contact</Link>
            </li>
          </ul>
         </div>

         <div >
          <input className='py-5 px-5 w-[380px] outline-none border-2 border-green-600 rounded-2xl' type="text" placeholder='Search Your Products' />
         </div>
         <div className="button flex gap-3 items-center">
          <div className="login text-green-600">Login</div>
          <div className="login text-green-600">Register</div>
         </div>
         
         </div>
         
        </Container>
        
        
    </nav>
  )
}

export default Navber