import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1 '>
        <div className='textsture mt-48 px-20 font-[Founders_Grotesk_X-Condensed] '>

            {
              ["WE CREATE " , "EYE-OPENING ", " PRESENTATION"].map((item,index)=>{
                return <div className='masker'>
                  <div className='w-fit flex'> { index===1 && (<div className='w-[7vw] h-[5vw] bg-red-600 rounded-md relative -bottom-[0.8vw] '>  </div>)}  <h1 className='   h-full font-bold text-8xl leading-[5.5vw]'>{item}</h1></div>
                </div>
              })
            }
        </div>

        <div className='flex mt-20 border-t-2  border-zinc-800 justify-between items-center py-5 px-5'> 
            { 
                ["For public and private companies ", " From the first pitch to IPO" ,].map((item,index)=>
                <p className='text-md font-light tracking-tight leading-none'>{item}</p>)
            }

             <div className=' start flex gap-5'> 
            <div className='px-4 py-2 border-[2px]  border-zinc-500  text-sm font-light rounded-full'> Start The Project 
            </div>
            <div className='w-10 h-10 border-[2px]  rounded-full  border-zinc-500 flex justify-center items-center'>
              <span className='rotate-[45deg]'>    <FaArrowUpLong /></span>
              
            </div>
            </div>
        </div>
    </div>
  )
}

export default Landing
