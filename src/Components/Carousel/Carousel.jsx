import React, { useEffect } from 'react'
import { useState } from 'react'
import {IoIosArrowDropleft,IoIosArrowDropright} from 'react-icons/io'
import {RxDot} from 'react-icons/rx'
import IMG1 from '../../Images/college-image1.jpeg'
import IMG2 from '../../Images/college-image2.jpeg'
import IMG3 from '../../Images/placement-statatics.jpg'
import IMG4 from '../../Images/college-image3.jpeg'
import IMG5 from '../../Images/college-image4.jpeg'

function Carousel() {
  const slides = [
    {
      images: IMG1
    },
    {
      images: IMG3
    },
    {
      images: IMG4
    },
    {
      images: IMG5
    },
    {
      images: IMG2
    }
  ]

  const[currentSlide,setCurrentSlide] = useState(0)

  const prevSlide = () =>{
    const isFirstSlide = currentSlide === 0
    const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1
    setCurrentSlide(newSlide)
  }

  const nextSlide = () =>{
    const isLastSlide = currentSlide === slides.length - 1
    const newSlide = isLastSlide ? 0 : currentSlide + 1
    setCurrentSlide(newSlide)
  }
 
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex)
  }

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCurrentSlide(currentSlide => currentSlide >= slides.length - 1 ? 0 : currentSlide + 1)
    },3750)

    return () => clearInterval(intervalId);
  },[])
  



  return (
    <div className=' h-[400px] w-[600px] items-center justify-between realtive rounded-md ml-9' >
      <div style={{backgroundImage: `url(${slides[currentSlide].images})`}} className='w-full h-full rounded-2xl bg-center bg-cover transition-all ease-in'></div>
      <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer mt-20 ml-2' >
        <IoIosArrowDropleft onClick={prevSlide} size={30}/>
      </div>
      <div className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer mt-20 ml-[568px]'>
        <IoIosArrowDropright onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div 
            key={slideIndex}
            onClick={()=> goToSlide(slideIndex)}
            className='cursor-pointer transition-all'
            >
            <RxDot  size={20}/>
          </div>
        ) )}
      </div>
    </div>
      
    
  )
}

export default Carousel