import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <nav className='absolute w-full'>
      <div className='container flex items-center justify-between px-4 mx-auto'>
        <p className='py-4 font-bold md:text-xl'>Philip Laxamana</p>
        <FiMenu
          className='w-6 h-6 cursor-pointer md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className='hidden space-x-4 md:block'>
          <Link href='#'>
            <a className='relative inline-block px-4 py-4 hover:font-bold hover:text-blue-600'>Home</a>
          </Link>
          <Link href='#'>
            <a className='relative inline-block px-4 py-4 hover:font-bold hover:text-blue-600'>
              Portfolio
            </a>
          </Link>
          <Link href='#'>
            <a className='relative inline-block px-4 py-4 hover:font-bold hover:text-blue-600'>About</a>
          </Link>
          <Link href='#'>
            <a className='relative inline-block px-4 py-4 hover:font-bold hover:text-blue-600'>Blog</a>
          </Link>
          <Link href='#'>
            <a className='relative inline-block px-4 py-4 hover:font-bold hover:text-blue-600'>
              Contact Me
            </a>
          </Link>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block fixed z-20 top-0 right-0 min-h-screen pt-4 w-64 bg-gray-300' : 'hidden'} text-right`}>
        <FiX
          className='w-6 h-6 mb-4 ml-auto mr-6 cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <Link href='#'>
          <a className='block px-6 py-4 hover:bg-gray-200'>Home</a>
        </Link>
        <Link href='#'>
          <a className='block px-6 py-4 hover:bg-gray-200'>Portfolio</a>
        </Link>
        <Link href='#'>
          <a className='block px-6 py-4 hover:bg-gray-200'>About</a>
        </Link>
        <Link href='#'>
          <a className='block px-6 py-4 hover:bg-gray-200'>Blog</a>
        </Link>
        <Link href='#'>
          <a className='block px-6 py-4 hover:bg-gray-200'>Contact Me</a>
        </Link>
      </div>
    </nav>
  )
}
