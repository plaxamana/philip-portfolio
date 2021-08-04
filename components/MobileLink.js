import Link from 'next/link'

const MobileLink = ({ href, to }) => {
  return (
    <Link href={href}>
      <a className='block px-6 py-4 font-medium hover:bg-blue-300'>{to}</a>
    </Link>
  )
}

export default MobileLink
