import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import MobileLink from '@/components/MobileLink'
import NavLink from '@/components/NavLink'
import Link from 'next/link'
import { pages } from '../globalvars'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='absolute top-0 left-0 right-0 z-10 w-full'>
      <div className='flex items-center justify-between px-4 mx-auto md:container'>
        <Link href='/'>
          <a>
            <p className='py-4 font-bold md:text-xl'>Philip Laxamana</p>
          </a>
        </Link>
        <FiMenu
          className='w-6 h-6 cursor-pointer md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <div className='hidden space-x-4 md:block'>
          {pages.map(({ to, href }) => (
            <NavLink href={href} to={to} key={to} />
          ))}
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transform duration-300 fixed z-20 top-0 right-0 min-h-screen pt-4 w-64 bg-blue-500 text-right`}
      >
        <FiX
          className='w-6 h-6 mb-4 ml-auto mr-6 cursor-pointer'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {pages.map(({ to, href }) => (
          <MobileLink href={href} to={to} key={to} />
        ))}
      </div>
    </nav>
  )
}
