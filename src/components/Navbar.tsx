import React from 'react'
import Logo from '../assets/Logo.svg'

const Navbar = () => {
  return (
    <>
    <nav className='px-5'>
        <div className='flex justify-between items-center'>
            <div>
              <img src={Logo} className='w-20 h-20'/>
            </div>
            <div className='uppercase'>
              menu
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar