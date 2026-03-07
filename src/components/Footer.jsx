import React from 'react'
import { FcShop } from 'react-icons/fc'
import Container from '../layer/Container'
import { FaFacebookF, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    
      <div className='py-25 bg-gray-800'>

       <Container>
         <div className='grid grid-cols-4 px-8 gap-30'>
        
            <div className=''>
              <div className='flex gap-3 items-center'>
                <span><FcShop /></span>
               <div className="logo font-extrabold text-2xl text-green-600 italic">BAZAARDHOR
                </div> 
              </div>
              
                 <p className='font-sans font-normal text-white text-[16px] mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis earum rerum voluptatum non, cumque voluptas cupiditate error facilis quidem suscipit.</p>  
                <div className='mt-8 flex gap-7'>
                  <span className='text-3xl text-blue-600'><FaFacebookF /></span>
                  <span className='text-3xl text-green-600'><FaWhatsappSquare /></span>
                  <span className='text-3xl text-blue-600'><FaLinkedin /></span>
                </div>   
          </div>

          <div className=''>
         <h3 className='font-extrabold text-2xl text-green-600 italic'>Quick Links</h3>
         <ul className='mt-5'>
          <li>
            <Link className='mt-5 font-bold text-white'>Contact Us</Link>
          </li>
          <li>
            <Link className='mt-5 font-bold text-white'>Shop all products</Link>
            <li>
            <Link className='mt-5 font-bold text-white'>Specal offer</Link>
          </li>
           <li>
            <Link className='mt-5 font-bold text-white'>Recipes & Blog</Link>
          </li>
          <li>
            <Link className='mt-5 font-bold text-white'>Carrar</Link>
          </li>
          </li>
         </ul>
          </div>
          

        </div>
       </Container>

      </div>

    
  )
}

export default Footer