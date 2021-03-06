import { FiDownload, FiEye, FiGlobe } from 'react-icons/fi'
import Link from 'next/link'

export default function Button({
  href,
  target,
  type,
  caption,
  icon,
  className,
  isProject,
}) {
  return type === 'primary' ? (
    <div className='relative'>
      <a
        href={href}
        target={target}
        className={`flex items-center justify-center px-6 py-4 duration-300 transform translate-x-2 -translate-y-2 bg-yellow-300 border-4 border-black hover:translate-y-0 hover:translate-x-0 ${
          className && className
        }`}
      >
        {icon === 'download' ? (
          <FiDownload className='w-6 h-6 mr-2' />
        ) : icon === 'eye' ? (
          <FiEye className='w-6 h-6 mr-2' />
        ) : (
          <FiGlobe className='w-6 h-6 mr-2' />
        )}{' '}
        {caption}
      </a>
      <div
        className={`absolute bottom-0 left-0 w-full h-full border-4 border-black -z-10 ${
          isProject && 'hidden'
        }`}
      ></div>
    </div>
  ) : (
    <Link href={href}>
      <a
        className={`flex items-center justify-center px-6 py-4 hover:underline ${className}`}
        target={target}
      >
        {icon === 'download' ? (
          <FiDownload className='w-6 h-6 mr-2' />
        ) : (
          <FiEye className='w-6 h-6 mr-2' />
        )}{' '}
        {caption}
      </a>
    </Link>
  )
}
