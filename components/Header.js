import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <nav className='bg-gray-300'>
      <div className='container mx-auto flex justify-between items-center px-4'>
        <p className='font-bold py-4'>Philip Laxamana</p>
        <FiMenu
          className='w-6 h-6 cursor-pointer md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className='hidden md:block space-x-4'>
          <Link href='#'>
            <a className='inline-block py-4 px-4 hover:bg-gray-200'>Home</a>
          </Link>
          <Link href='#'>
            <a className='inline-block py-4 px-4 hover:bg-gray-200'>
              Portfolio
            </a>
          </Link>
          <Link href='#'>
            <a className='inline-block py-4 px-4 hover:bg-gray-200'>About</a>
          </Link>
          <Link href='#'>
            <a className='inline-block py-4 px-4 hover:bg-gray-200'>Blog</a>
          </Link>
          <Link href='#'>
            <a className='inline-block py-4 px-4 hover:bg-gray-200'>
              Contact Me
            </a>
          </Link>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block fixed top-0 right-0 min-h-screen pt-4 w-64 bg-gray-300' : 'hidden'} text-right`}>
        <FiX
          className='w-6 h-6 cursor-pointer ml-auto mr-6 mb-4'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <Link href='#'>
          <a className='block py-4 px-6 hover:bg-gray-200'>Home</a>
        </Link>
        <Link href='#'>
          <a className='block py-4 px-6 hover:bg-gray-200'>Portfolio</a>
        </Link>
        <Link href='#'>
          <a className='block py-4 px-6 hover:bg-gray-200'>About</a>
        </Link>
        <Link href='#'>
          <a className='block py-4 px-6 hover:bg-gray-200'>Blog</a>
        </Link>
        <Link href='#'>
          <a className='block py-4 px-6 hover:bg-gray-200'>Contact Me</a>
        </Link>
      </div>
    </nav>
  )
}
