import { motion } from 'framer-motion'
import React from 'react'

function Cards() {
  return (
    <div  className='w-full px-20 bg-zinc-900 h-screen flex gap-5 items-center'   >
        <div className=' w-1/2 bg-[#004D43] h-[50vh] rounded-xl relative'>
           <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] "  src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
           <button className='absolute bottom-1 left-1 border-2 border-zinc-200 px-[14px] py-[4px] rounded-2xl'>&copy; 2022-2024</button>
        </div>  
        <div className='w-1/2 h-[50vh] flex gap-5  '>
           <div className='w-1/2 h-full relative bg-zinc-500 rounded-xl'>
             <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] "  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
             <button className='absolute bottom-1 left-1 border-2 border-zinc-200 px-[14px] py-[4px] rounded-2xl'> RATING 5.0 ON CLUTCH</button>
           </div>

           <div className='w-1/2 h-full relative bg-zinc-500 rounded-xl'>
             <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] "  src="https://cdn.prod.website-files.com/5d816b07d269385f68dbcab0/5ea29a574423326d48ee3ee9_TFA-Hero-Badge-01-white.svg" alt="" />
             <button className='absolute bottom-1 left-1 border-2 border-zinc-200 px-[14px] py-[4px] rounded-2xl'>FUTURE ACADEMICS</button>
           </div>
        </div>
    </div>
  )
}

export default Cards
