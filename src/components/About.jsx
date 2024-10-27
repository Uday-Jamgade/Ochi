import React from 'react'

function About() {
  return (
    <div   className=' w-full p-20 bg-[#CDEA86] text-black'>
        <h1 className='text-5xl font-[Neue_Montreal] leading-[3.5vw] tracking-tight'> Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full border-t-[1px] mt-20  border-[#5a6934] flex'>
          <div className='w-1/2'>

          <h1 className='text-7xl font-[Neue_Montreal] pt-5 font- '> Our approach:</h1>
          <button className='flex px-10 py-5  mt-6 items-center justify-center gap-8 rounded-full text-white bg-zinc-900 ' > Read more
             <div className=' w-3 h-3 bg-white rounded-full'></div>
          </button>
          
          </div>

          <div className='w-1/2 h-[70vh]  pt-8 '>
           <img className='w-full h-full cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
          </div>
        </div>

      
    </div>
  )
}

export default About
