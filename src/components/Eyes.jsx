import React, { useEffect, useState } from 'react'

function Eyes() {

  const [roatare, setRotate]=useState(0);

useEffect(()=>{
window.addEventListener("mousemove", (e)=>{
  const mouseX= e.clientX;
  const mouseY = e.clientY;

  const deltaX = mouseX - window.innerWidth/2;
  const deltaY = mouseY - window.innerHeight/2;

  const angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
  setRotate(angle-180);

})
})


  return (
    <div className=' w-full h-screen  overflow-hidden'> 
      <div   data-scroll data-scroll-speed="-.7" className= ' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3 h-[300px]  flex gap-10 items-center'>
          <div className=' w-[15vw] h-[15vw] bg-white rounded-full flex justify-center items-center'> 
            <div className='w-2/3 h-2/3 rounded-full bg-zinc-900  relative'>
                <div style={{transform: `translate(-50%,-50%) rotate(${roatare}deg)`}} className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                      <div className='w-10 h-10 rounded-full bg-zinc-100'> </div>
                </div>
            
            </div>
         </div>  
          <div className='  w-[15vw] h-[15vw] bg-white rounded-full flex justify-center items-center relative'>
            <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 relative'>
                <div style={{transform: `translate(-50%,-50%) rotate( ${roatare}deg)`}} className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                      <div className='w-10 h-10 rounded-full bg-zinc-100'> </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
