import { FiMenu, FiX } from 'react-icons/fi'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='bg-gray-300 px-4 py-2'>
      <div className='container mx-auto flex justify-between items-center'>
        <p className='text-xl font-bold'>Philip Laxamana</p>
        <FiMenu
          size='1.25em'
          className='cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className={`${isMenuOpen ? 'fixed top-0 right-0 bg-gray-600 text-white flex flex-col items-end text-right py-4 px-6 min-h-screen w-1/2' : 'hidden'}`}>
          <FiX
            size='1.25em'
            className='cursor-pointer mb-6'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <ul className="space-y-6">
            <li>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a>Contact Me</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
