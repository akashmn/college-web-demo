import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Carousel from './Components/Carousel/Carousel'
import ContactForm from './Components/ContactForm/ContactForm'
import SocialBar from './Components/SocialBar/SocialBar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import './index.css';

function App() {
  return (
    <div className="gap-8 bg-stone-100 flex flex-col">
      <div className='fixed top-0 z-50 w-full bg-slate-300'>
        <NavBar />
      </div>
      <SocialBar />
      <div className='flex flex-row items-center justify-between gap-5'>
        <Carousel />
        <About/>
      </div>
      <ContactForm />
      <Footer/>
    </div>
  )
}

export default App