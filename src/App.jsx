import React from 'react'
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Marque from './components/Marque';
import About from './components/About';
import Eyes from './components/Eyes';
import Feature from './components/Feature';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Project from './components/Project';
import LocomotiveScroll from 'locomotive-scroll';



function App() {

  const locomotivescroll = new LocomotiveScroll();


  return (
    <div className='w-full h-screen bg-zinc-900 text-white '>
     <Navbar/>
     <Landing/>
     <Marque/>
     <About/>
     <Eyes/>
     <Feature/>
     <Cards/>
     <Project/>
     <Footer/>
    </div>
  )
}

export default App;
