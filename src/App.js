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
    <div className="gap-8 bg-stone-200 flex flex-col">
      <div className='fixed top-0 z-50 w-full bg-white'>
        <NavBar />
      </div>
      <SocialBar />
      <div className='flex flex-row gap-10'>
        <Carousel />
        <About/>
      </div>
      <ContactForm />
      <Footer/>
    </div>
  )
}

export default App