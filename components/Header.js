import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import MobileLink from './MobileLink'
import NavLink from './NavLink'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <nav className='absolute w-full'>
      <div className='flex items-center justify-between px-4 mx-auto md:container'>
        <p className='py-4 font-bold md:text-xl'>Philip Laxamana</p>
        <FiMenu
          className='w-6 h-6 cursor-pointer md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className='hidden space-x-4 md:block'>
          <NavLink href='/' to='Home' />
          <NavLink href='#' to='Portfolio' />
          <NavLink href='#' to='About' />
          <NavLink href='#' to='Blog' />
          <NavLink href='#' to='Contact Me' />
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block fixed z-20 top-0 right-0 min-h-screen pt-4 w-64 bg-blue-500' : 'hidden'} text-right`}>
        <FiX
          className='w-6 h-6 mb-4 ml-auto mr-6 cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <MobileLink href='/' to='Home'/>
        <MobileLink href='#' to='Portfolio'/>
        <MobileLink href='#' to='About'/>
        <MobileLink href='#' to='Blog'/>
        <MobileLink href='#' to='Contact Me'/>
      </div>
    </nav>
  )
}