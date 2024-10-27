import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'

function Feature() {
const cards = [useAnimation(), useAnimation()];

const handleHover=(index)=>{
    cards[index].start({y:"0"})
}

const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"})
}
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.04' className=' bg-zinc-900'>
        <div className=' w-full py-10 px-10'>
            <h1 className='text-6xl  leading-none tracking-tight font-semibold'>Featured projects:</h1>
        </div>

        <div className='px-20'>
            <div className='cards  w-full flex gap-10 px-20  pb-10'>
                <motion.div onHoverStart={()=>handleHover(0)}  onHoverEnd={()=>handleHoverEnd(0)} className='container w-1/2 h-[75vh] relative '>
                   <div> Fide</div>
                    <h1 className='absolute flex text-[#CDEA86] z-10 text-6xl font-bold  left-full top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden'>
                    {
                         "FIDE".split('').map((item,index)=>
                         <motion.span initial={{y:"100%"}}
                         animate={cards[0]} transition={{ease: [ 0.22, 1, 0.36, 1] , delay: index*.02}}
                         className='inline-block z-10'>{item}</motion.span>)
                    }
                    </h1>
                    <img  className=" w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </motion.div>

                <motion.div  onHoverStart={()=>handleHover(1)}  onHoverEnd={()=>handleHoverEnd(1)} className='container w-1/2 h-[75vh] relative -z-9'>
                    <div> <h1> CaradBoard Spaceship</h1></div>
                    <h1 className='absolute flex overflow-hidden text-[#CDEA86] -z-9 text-6xl font-bold  right-full top-1/2 translate-x-1/2 -translate-y-1/2'>
                    {
                         "CARDBOARD".split('').map((item,index)=><motion.span initial={{y:"100%"}}
                         animate={cards[1]} transition={{ease: [ 0.22, 1, 0.36, 1] , delay: index*.02}}
                         className='inline-block'>{item}</motion.span>)
                    }
                    </h1>
                    <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                </motion.div>
            </div>
        </div>

      
        </div>
      
    
  ) 
}

export default Feature
