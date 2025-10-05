import React from 'react'
import Image from 'next/image'
import { assets } from '../../../assets/assets'

const Testimonials = () => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20 min-h-screen bg-amber-900'>
        <div className="bg-white p-4 m-2 ">

     <h3 className='font-bold'>Tony Stark</h3>
     <p>ravi's contribution to the stark industries is great, very glad to work with ravi,his website and technical experience helped my bussiness grow</p>
     <div className="flex items-center gap-4 pt-2 ">

     <Image src={assets.user_image }  className='w-[10%] rounded-full  ' />
     <h1>tony</h1>


     </div>
    </div>

      <div className="bg-white p-4 m-4 ">

     <h3 className='font-bold'>Tony Stark</h3>
     <p>ravi's contribution to the stark industries is great, very glad to work with ravi,his website and technical experience helped my bussiness grow</p>
     <div className="flex items-center gap-4 pt-2 ">

     <Image src={assets.user_image }  className='w-[10%] rounded-full  ' />
     <h1>tony</h1>


     </div>
    </div>
        </div>
  )
}

export default Testimonials