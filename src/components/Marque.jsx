import { motion } from 'framer-motion'
import React from 'react'

function Marque() {

  return (
    <div data-scroll  data-scroll-section data-scroll-speed=".1" className=' w-full py-10  bg-[#004D43]'>

        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden gap-10 '>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity , ease:"linear" ,duration:5}}  className=' text-[15vw]  leading-none uppercase  font-semibold font-[Founders_Grotesk_X-Condensed] pb-10'>We Are Ochi </motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity , ease:"linear" ,duration:5}}  className='text-[15vw]  leading-none uppercase  font-semibold  font-[Founders_Grotesk_X-Condensed] pb-10  px-10 '>We Are Ochi</motion.h1>

        </div>
        
      
    </div>
  )
}

export default Marque
