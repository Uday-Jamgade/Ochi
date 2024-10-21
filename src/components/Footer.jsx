import React from 'react'

function Footer() {
  return (
    <div className='w-full h-screen py-10 px-20 bg-zinc-900 flex' >
        <div className='  w-1/2  h-full flex flex-col justify-between'>
        <div className='text-8xl uppercase font-bold tracking-tight'>  
          <h1 >EYE-</h1>
            <h1>OPENING</h1>  
        </div>
        <h1 className='text-3xl'>Ochi.</h1>
        
        </div>

        <div className='w-1/2 h-full'> 
            <h1 className='text-8xl uppercase font-bold tracking-tight' >PRESENTATION</h1>

            <div className='flex flex-col mt-10 '>
                <h1 className='mb-5'>S:</h1>
                <a href=""> Instagram</a>
                <a href=""> Behance</a>
                <a href=""> Fecebook</a>
                <a href=""> Linkedin</a>
            </div>

            <div className='flex justify-between'>
            <div className='flex flex-col mt-10 '>
                <h1 className='mb-5'>L:</h1>
                <a href=""> 202-2964 W 4th Ave</a>
                <a className='mb-3' href=""> Vancouver,Canada</a>
                <a href=""> 30 Chukarina St</a>
                <a href="">Lviv,Ukraine</a>
            </div>

            <div className='flex flex-col mt-10 '>
                <h1 className='mb-5'>M:</h1>
                <a href=""> Home</a>
                <a href=""> Services</a>
                <a href=""> Our Work</a>
                <a href=""> About</a>
                <a href=""> Insight</a>
                <a href=""> Contact us</a>
            </div>

            </div>

            <div className='flex flex-col mt-10 '>
                <h1 className='mb-5'>S:</h1>
                <a href="">Hello@Uday.design</a>
                
            </div>
           


        </div>

      
    </div>
  )
}

export default Footer
