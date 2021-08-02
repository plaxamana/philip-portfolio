import Link from "next/link";
import { FiEye, FiDownload } from 'react-icons/fi'

export default function Hero() {
  return (
    <section>
      <div className='pt-60 max-w-2xl mx-auto text-center'>
        <p className='text-md sm:text-2xl'>Hi, I&apos;m Philip</p>
        <h1 className='text-4xl leading-none sm:text-6xl font-black'>
          I create beautiful websites that make the internet look great
        </h1>
      </div>
      <div className='mt-12 flex flex-col items-center'>
        <a
          href='#'
          className='flex items-center justify-center py-4 px-6 bg-yellow-300 border-4 border-black relative'
        >
          <FiDownload className='h-6 w-6 mr-2' /> Download Resume
        </a>
        <Link href='#'>
          <a className='flex items-center justify-center py-4 px-6'>
            <FiEye className='h-6 w-6 mr-2' /> View My Work
          </a>
        </Link>
      </div>
    </section>
  )
}
