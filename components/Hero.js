import Link from 'next/link'
import Image from 'next/image'
import { FiEye, FiDownload } from 'react-icons/fi'
import Blob from './Blob'

export default function Hero() {
  return (
    <section>
      <div className='max-w-2xl mx-auto text-center pt-60'>
        <p className='text-lg sm:text-2xl'>Hi, I&apos;m Philip</p>
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
      <HeroImage />
    </section>
  )
}

const HeroImage = () => {
  return (
    <div className='relative flex justify-center h-full p-4 mt-24 mb-60 lg:mt-32'>
      <Image
        src='/images/svg/home/coding_illustration.svg'
        alt='Illustration of a man coding'
        width={560}
        height={447}
      />
      <Blob
        src='/images/svg/home/blue_blob.svg'
        className='absolute -top-1/4 -z-10'
      />
    </div>
  )
}
