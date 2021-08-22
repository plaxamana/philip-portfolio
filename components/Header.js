import { FiMenu, FiX } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import MobileLink from '@/components/MobileLink'
import NavLink from '@/components/NavLink'
import Link from 'next/link'
import { pages } from '../globalvars'
import Alert from '@/components/Alert'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [closeAlert, setCloseAlert] = useState(false)
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', changeNavbar)
  })

  function changeNavbar() {
    if(window.scrollY > 60) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  return (
    <div className='sticky top-0 z-50 -mt-16'>
      <Alert
        message='I am available for hire. '
        closeAlert={closeAlert}
        setCloseAlert={() => setCloseAlert(true)}
      />
      <nav className={`w-full transition-all duration-300 ${navbar ? 'bg-gray-900 text-white' : null }`}>
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
    </div>
  )
}
