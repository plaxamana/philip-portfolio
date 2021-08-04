import Link from 'next/link'

const NavLink = ({ href, to }) => {
  return (
    <Link href={href}>
      <a className='relative inline-block px-4 py-4 text-base font-medium hover:font-bold hover:text-blue-600'>
        {to}
      </a>
    </Link>
  )
}

export default NavLink
