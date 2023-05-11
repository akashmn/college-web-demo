import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function SocialBar() {
  return (
    <div id='home' className='p-2 flex flex-row items-center justify-between mt-36 ml-[900px] w-[25%] bg-white rounded-md'>
      <div className=' flex flex-row gap-4 items-center justify-center'>
        <h2 className=' text-xs'>CONNECT WITH US</h2>
        <h2>:</h2>
        <div className='flex flex-row items-center gap-6 text-blue-950'>
        <a className=' hover:text-blue-500 '  href="https://instagram.com/akxxsh__?igshid=ZDdkNTZiNTM="><BsInstagram size={22}/></a>
        <a className=' hover:text-blue-500 '  href="https://github.com/akashmn"><BsTwitter size={22}/></a>
        <a className=' hover:text-blue-500 '  href="https://www.linkedin.com/in/akash-m-nandan-87b13a237"><BsLinkedin size={22}/></a>
        </div>
      </div>
    </div>
  );
}

export default SocialBar;