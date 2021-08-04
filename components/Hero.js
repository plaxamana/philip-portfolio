import Link from 'next/link'
import { FiEye, FiDownload } from 'react-icons/fi'

export default function Hero() {
  return (
    <section>
      <div className='max-w-2xl mx-auto text-center pt-60'>
        <p className='text-md sm:text-2xl'>Hi, I&apos;m Philip</p>
        <h1 className='text-4xl font-black leading-none sm:text-6xl'>
          I create beautiful websites that make the internet look great
        </h1>
      </div>
      <div className='flex flex-col items-center mt-12 md:flex-row md:justify-center'>
        <a
          href='/Philip_Laxamana_Resume.pdf'
          target='a_blank'
          className='relative flex items-center justify-center px-6 py-4 bg-yellow-300 border-4 border-black'
        >
          <FiDownload className='w-6 h-6 mr-2' /> Download Resume
        </a>
        <Link href='#'>
          <a className='flex items-center justify-center px-6 py-4'>
            <FiEye className='w-6 h-6 mr-2' /> View My Work
          </a>
        </Link>
      </div>
    </section>
  )
}
