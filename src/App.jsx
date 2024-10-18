import React from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marque from './components/Marque';
import About from './components/About';

function App() {
  return (
    <div className='w-full h-screen bg-zinc-900 text-white '>
     <Navbar/>
     <Landing/>
     <Marque/>
     <About/>
    </div>
  )
}

export default App;
