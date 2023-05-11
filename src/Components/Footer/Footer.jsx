import React from 'react'

import {MdKeyboardArrowRight} from 'react-icons/md'
import {SlCallIn, SlLocationPin} from 'react-icons/sl'
import {FiMail} from 'react-icons/fi'

import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs'

import cecLogoWhite from '../../Images/CEC-logo-white.png'

function Footer() {
  return (
    <div className='bg-blue-950 text-slate-400 font-serif text-sm w-full h-[450px] '>
        <div className='flex flex-row justify-between gap-10 mt-16 ml-28 mr-28' >
            <div>
                <h3 className='underline'>MORE IN COLLEGE</h3>
                <div className='mt-8 flex flex-col gap-3'>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">About Us</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">Academic Calender</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">Placements</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">Administrations</a>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='underline'>HIGHLIGHTS</h3>
                <div className='mt-8 flex flex-col gap-3'>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">IHRD Tharang</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">ASHWA</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">UTSAV'23</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">SIP</a>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='underline'>TECHNICAL FORUMS</h3>
                <div className='mt-8 flex flex-col gap-3'>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">IEEE SB CEC</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">IEDC CEC</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">TnkerHub CE Chengannur</a>
                    </div>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">Departement Forums</a>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='underline'>NON - TECHNICAL FORUMS</h3>
                <div className='mt-8 flex flex-col gap-3'>
                    <div className='flex flex-row items-center gap-5 '>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">NSS CEC</a>
                    </div>
                    <div className='flex flex-row items-center gap-5'>
                        <MdKeyboardArrowRight />
                        <a className='hover:underline hover:text-white' href="">NCC Navel Unit</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div>
                    <img src={cecLogoWhite} className='w-24 ml-10' alt="" />
                </div>
                <div className='flex flex-row gap-5'>
                    <SlLocationPin />
                    <h3>College of Engineering Chengannur <br /> Chengannur P.O. Alapuzha District</h3>
                </div>
                <div className='flex flex-row gap-5 items-center' >
                    <SlCallIn />
                    <h3>+91-479-2454125</h3>
                </div >
                <div className='flex flex-row gap-5 items-center'>
                    <FiMail />
                    <h3>principal@ceconline.edu</h3>
                </div>
            </div>
        </div>
        <div className='bg-slate-400 opacity-25 mt-10 w-[65%] h-[1px] m-auto justify-between'>

        </div>
        <div className='flex flex-col items-center justify-center mt-3 gap-1'>
        <h1>@ C E C</h1>
        <div className='flex flex-row items-center justify-center gap-6 text-slate-400'>
        <a className=' hover:text-white '  href="https://www.instagram.com/cec_chengannur/?hl=en"><BsInstagram size={22}/></a>
        <a className=' hover:text-white '  href="https://twitter.com"><BsTwitter size={22}/></a>
        <a className=' hover:text-white '  href="https://www.linkedin.com/school/college-of-engineering-chengannur/?originalSubdomain=in"><BsLinkedin size={22}/></a>
        </div>
        </div>
    </div>
  )
}

export default Footer