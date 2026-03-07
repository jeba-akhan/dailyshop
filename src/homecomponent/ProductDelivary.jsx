import React from 'react'
import Container from '../layer/Container'
import { FaCaravan } from 'react-icons/fa'
import { MdOutlineWbSunny } from 'react-icons/md'

const ProductDelivary = () => {
  return (
    <div className='py-25'>
        <Container>
            <div className='grid grid-cols-3 gap-11 px-10 bg-green-50 py-4 rounded-3xl'>
                <div>
                    <div className='bg-green-100 relative w-[60px] h-[60px] rounded-full'><FaCaravan className='top-1/2 left-1/2 -translate-y-1/2 absolute ' /></div>
                    <h3 className='font-semibold font-sans text-[28px] text-green-500 mt-5'>Faster delivary</h3>
                    <p className='font-semibold font-sans text-[28px] text-gray-500 mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptatem veniam quia velit quas soluta.</p>
                    
                </div>
                <div>
                    <div className='bg-green-100 relative w-[60px] h-[60px] rounded-full'><MdOutlineWbSunny className='top-1/2 left-1/2 -translate-y-1/2 absolute text-amber-300 ' /></div>
                    <h3 className='font-semibold font-sans text-[28px] text-green-500 mt-5'>Quality Graranty</h3>
                    <p className='font-semibold font-sans text-[28px] text-gray-500 mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptatem veniam quia velit quas soluta.</p>
                    
                </div>
                <div>
                    <div className='bg-green-100 relative w-[60px] h-[60px] rounded-full'><FaCaravan className='top-1/2 left-1/2 -translate-y-1/2 absolute ' /></div>
                    <h3 className='font-semibold font-sans text-[28px] text-green-500 mt-5'>Faster delivary</h3>
                    <p className='font-semibold font-sans text-[28px] text-gray-500 mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A voluptatem veniam quia velit quas soluta.</p>
                    
                </div>

            </div>
        </Container>

    </div>
  )
}

export default ProductDelivary