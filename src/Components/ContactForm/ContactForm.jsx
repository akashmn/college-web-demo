import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3okxg4d', 'template_2vlid9a', form.current, 'iCp9-EgVm93LMt733')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact'  className='w-[93%] m-auto' >
      <h3 className='flex justify-center mt-4 underline p-1 text-2xl font-medium font-serif ' >CONTACT US</h3>
      <div className='flex flex-row m-auto mt-3 '>
        <div className='w-1/2 flex flex-row items-center justify-center gap-5'>
          <div className=' bg-white flex flex-col items-center justify-center border-4 border-black rounded-md p-3 h-44 w-52'>
            <h4 className='text-lg underline font-serif'>Email</h4>
            <h5 className='mt-1 font-serif'>The Principal</h5>
            <h5>principal@ceconline.edu</h5>
            <a className='mt-3 rounded-md p-2 text-white bg-blue-950 hover:bg-white hover:text-black hover:border-2 hover:border-black' href="mailto:akashmn@ieee.org">Send Email</a>
          </div>
          <div className='bg-white flex flex-col items-center justify-center border-4 border-black rounded-md p-3 h-44 w-52'>
            <h4 className='text-lg underline font-serif'>Contact No.</h4>
            <h5 className='mt-1'>XXXXXXXXXX (Office)</h5>
            <h5>XXXXXXXXX (Reception)</h5>
            <h5>XXXXXXXXX (Staff Head)</h5>
          </div>
        </div>
        <div className='w-1/2' >
          <form className='flex flex-col gap-2 p-5' ref=  {form}  onSubmit={sendEmail}>
          <label>Name</label>
          <input className='border-2 border-slate-300 rounded-md' type="text" name="user_name" required/>
          <label>Email</label>
          <input className='border-2 border-slate-300 rounded-md' type="email" name="user_email" required />
          <label>Message</label>
          <textarea rows='5' className='border-slate-300 border-2 rounded-md' name="message" required/>
          <button type='submit' className='bg-blue-950 rounded-md mt-2  text-white hover:bg-white hover:text-black hover:border-2 hover:border-black p-2' >Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;