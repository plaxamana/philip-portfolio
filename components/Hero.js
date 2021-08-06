import Image from 'next/image'
import Blob from '@/components/Blob'
import Button from '@/components/Button'
import illustration from '@/images/svg/home/coding_illustration.svg'
import { pages } from '../globalvars'

export default function Hero() {
  return (
    <section>
      <div className='max-w-2xl mx-auto text-center pt-60'>
        <p className='text-lg sm:text-2xl'>Hi, I&apos;m Philip</p>
        <h1 className='text-4xl font-black leading-none sm:text-6xl'>
          I create beautiful websites that make the internet look great
        </h1>
      </div>
      <div className='flex flex-col items-center mt-12 md:flex-row md:justify-center md:space-x-6'>
        <Button
          type='primary'
          href='../Philip_Laxamana_Resume.pdf'
          caption='Download Resume'
          icon='download'
          target="_blank"
        />
        <Button caption='View My Work' href={pages[1].href} />
      </div>
      <HeroImage />
    </section>
  )
}

const HeroImage = () => {
  return (
    <div className='relative flex justify-center h-full p-4 mt-24 mb-60 lg:mt-32'>
      <Image
        src={illustration}
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
