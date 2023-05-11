import React from 'react'
import cecLogo from '../../Images/cec-logo.png'
import { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RiArrowDropUpLine } from 'react-icons/ri'

import HomeList from './HomeList.json'
import AcademicsList from './AcademicsList.json'
import DepartmentsList from './DepartmentsList.json'
import FacilitiesList from './FacilitiesList.json'

function NavBar() {

  const [aboutUsOpen,setAboutUsOpen] = useState(false);
  const [academicsOpen,setAcademicsOpen] = useState(false);
  const [departmentsOpen,setDepartmentsOpen] = useState(false);
  const [facilitiesOpen,setFacilitiesOpen] = useState(false);
  const [activeNav,setActiveNav] = useState('#');

  return (
    <div className='' >
      <nav className='flex justify-between items-center'>
        <div className='ml-5 flex flex-row gap-5 p-3'>
          <img className="w-28" src={cecLogo} alt="logo" />
          <div className='flex-col'>
            <h3 className='underline font-medium text-xl font-serif '>COLLEGE OF ENGINEERING <br/> CHENGANNUR</h3>
            <p className='font-light text-sm'>Managed By IHRD</p>
          </div>
        </div>
        <div className="flex items-center gap-10" >
          <ul className="flex gap-5">
            <li>
              <button className='transition duration-150 ease-in-out hover:ease-in-out hover:text-white hover:rounded-md hover:bg-blue-950 p-2' href="#"
              >HOME</button>
            </li>
            <li className='relative' x-datatype='{dropdownOpen:false}'>
              <button
                onClick={() => setAboutUsOpen(!aboutUsOpen)}
                className='transition duration-150 ease-in-out hover:ease-in-out hover:text-white hover:rounded-md  hover:bg-blue-950 p-2 flex items-center'
              >
                ABOUT  
                {
                  !aboutUsOpen ? (
                    <RiArrowDropDownLine/>
                  ) : 
                  (
                    <RiArrowDropUpLine />
                  )
                }
              </button>
              {aboutUsOpen && (
                <div className='bg-blue-950 text-slate-300  absolute top-11 flex flex-col items-start w-auto h-auto p-6 gap-3'
                onMouseEnter={() => setAboutUsOpen(true)}
                onMouseLeave={() => setAboutUsOpen(false)}
                >
                  {HomeList.map((item) => (
                    <div className='' key={item.id}>
                      <a className='hover:text-white hover:underline' href='#'>
                        {item.subMenu}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </li>

            <li className='relative' x-datatype='{dropdownOpen:false}'>
              <button
                onClick={() => setAcademicsOpen(!academicsOpen)}

                className='transition duration-150 ease-in-out hover:ease-in-out hover:text-white hover:rounded-md  hover:bg-blue-950 p-2 flex items-center'
              >
                ACADEMICS
                {
                  !academicsOpen ? (
                    <RiArrowDropDownLine/>
                  ) : 
                  (
                    <RiArrowDropUpLine />
                  )
                }
              </button>
              {academicsOpen && (
                <div className='bg-blue-950 text-slate-300 absolute top-11 flex flex-col items-start p-6 gap-3 w-auto h-auto'
                onMouseEnter={() => setAcademicsOpen(true)}
                onMouseLeave={() => setAcademicsOpen(false)}
                >
                  {AcademicsList.map((item) => (
                    <div className='' key={item.id}>
                      <a className='hover:text-white hover:underline' href='#'>
                        {item.subMenu}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li className='relative' x-datatype='{dropdownOpen:false}'>
              <button
                onClick={() => setDepartmentsOpen(!departmentsOpen)}

                className='transition duration-150 ease-in-out hover:ease-in-out hover:text-white hover:rounded-md  hover:bg-blue-950 p-2 flex items-center'
              >
                DEPARTMENTS
                {
                  !departmentsOpen ? (
                    <RiArrowDropDownLine/>
                  ) : 
                  (
                    <RiArrowDropUpLine />
                  )
                }
              </button>
              {departmentsOpen && (
                <div className='bg-blue-950 text-slate-300  absolute top-11 flex flex-col items-start p-6 gap-3 w-auto h-auto'
                onMouseEnter={() => setDepartmentsOpen(true)}
                onMouseLeave={() => setDepartmentsOpen(false)}
                >
                  {DepartmentsList.map((item) => (
                    <div className='' key={item.id}>
                      <a className='hover:text-white hover:underline' href='#'>
                        {item.subMenu}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li className='relative' x-datatype='{dropdownOpen:false}'>
              <button
                onClick={() => setFacilitiesOpen(!facilitiesOpen)}
                className='transition duration-150 ease-in-out hover:ease-in-out hover:text-white hover:rounded-md  hover:bg-blue-950 p-2 flex items-center'
              >
                FACILITIES
                {
                  !facilitiesOpen ? (
                    <RiArrowDropDownLine/>
                  ) : 
                  (
                    <RiArrowDropUpLine />
                  )
                }
              </button>
              {facilitiesOpen && (
                <div className='bg-blue-950 text-slate-300  absolute top-11 flex flex-col items-start p-6 gap-3 w-auto h-auto'
                onMouseEnter={() => setFacilitiesOpen(true)}
                onMouseLeave={() => setFacilitiesOpen(false)}
                >
                  {FacilitiesList.map((item) => (
                    <div className='' key={item.id}>
                      <a className='hover:text-white hover:underline' href='#'>
                        {item.subMenu}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li>
              <button
              onClick={()=>{
                setActiveNav('#contact');
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className='transition duration-150 ease-in-out hover:ease-in-out hover:text-white hover:rounded-md  hover:bg-blue-950 p-2'  href="#contact">
                CONTACT </button>
            </li>
          </ul>
          <div className='flex flex-row'>
            <button className='border-dashed border-2 border-blue-950 rounded-md p-2'>
              NOTIFICATIONS
            </button>
            <span class="relative h-5 w-5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-5 w-5 bg-sky-500 "></span>
            </span>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default NavBar