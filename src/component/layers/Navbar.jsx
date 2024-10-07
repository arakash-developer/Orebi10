import React, { useState } from 'react'
import Container from '../layers/Container'
// import logo from '../../../public/SoulSpace.png'
import logo from '/logo.png'
import { NavLink } from 'react-router-dom'
import Li from './Li'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";




const navbar = () => {
  let [show,setShow] = useState(true);
  let handler = () =>{
    setShow(!show);
  }
  return (
    <>
      <nav className='py-8'>
        <Container className='relative flex items-center justify-between'>
          <div className="flex items-center w-full">
              <div className="flex items-center justify-between w-full md:block md:w-auto">
                <NavLink  to='/'>
                  <img src={logo} alt="aa" />
                </NavLink>
                <div className="hamburger md:hidden">
                  <NavLink className='bg-red-200' onClick={handler} to='/'>
                    {
                      show ? <GiHamburgerMenu /> : <IoCloseSharp />
                    }
                  </NavLink>
                </div>
              </div>
              
              <ul className={`flex gap-x-[40px] mynav w-full justify-center absolute top-full left-0 pl-[12px] z-[9999] py-2 my-2 md:static flex-col md:flex-row bg-red-400 md:bg-transparent md:opacity-100 transition-all duration-100  ${ show ? "opacity-0": "opacity-100"}`}>
                <Li className='text-[#fff] md:text-[#767676]' liText='Home' to='/home'/>
                <Li className='text-[#fff] md:text-[#767676]' liText='Shop' to='/shop'/>
                <Li className='text-[#fff] md:text-[#767676]' liText='About' to='/faq'/>
                <Li className='text-[#fff] md:text-[#767676]' liText='Contacts' to='/about'/>
                <Li className='text-[#fff] md:text-[#767676]' liText='Journal' to='/contact'/>
              </ul>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default navbar