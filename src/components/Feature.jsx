import React from 'react'

function Feature() {
  return (
    <div className=' bg-zinc-900'>
        <div className=' w-full py-10 px-10'>
            <h1 className='text-6xl  leading-none tracking-tight font-semibold'>Featured projects:</h1>
        </div>

        <div className='px-20'>
            <div className='cards  w-full flex gap-10 px-20  pb-10'>
                <div className='container w-1/2 h-[75vh] relative '>
                   <div> Fide</div>
                    <h1 className='absolute text-[#CDEA86] z-9 text-6xl font-bold  left-full top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {
                         "FIDE".split('').map((item,index)=><span>{item}</span>)
                    }
                    </h1>
                    <img  className=" w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </div>

                <div className='container w-1/2 h-[75vh] relative'>
                    <div> <h1> CaradBoard Spaceship</h1></div>
                    <h1 className='absolute text-[#CDEA86] z-9 text-6xl font-bold  right-full top-1/2 translate-x-1/2 -translate-y-1/2'>
                    {
                         "CARDBOARD".split('').map((item,index)=><span>{item}</span>)
                    }
                    </h1>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                </div>
            </div>
        </div>

        <div className='px-20'>
            <div className='cards  w-full flex gap-10 px-20 mt-10 pb-10'>
                <div className='container w-1/2 h-[75vh] relative '>
                   <div> Trava</div>
                    <h1 className='absolute text-[#CDEA86] z-9 text-6xl font-bold  left-full top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    {
                         "TRAVA".split('').map((item,index)=><span>{item}</span>)
                    }
                    </h1>
                    <img  className=" w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                </div>

                <div className='container w-1/2 h-[75vh] relative'>
                    <div> <h1> Primunm</h1></div>
                    <h1 className='absolute text-[#CDEA86] z-9 text-6xl font-bold  right-full top-1/2 translate-x-1/2 -translate-y-1/2'>
                    {
                         "PRIMIUM".split('').map((item,index)=><span>{item}</span>)
                    }
                    </h1>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                </div>
            </div>
        </div>
      
    </div>
  ) 
}

export default Feature
