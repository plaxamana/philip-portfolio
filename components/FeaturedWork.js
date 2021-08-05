import Image from 'next/image'
import drones from '@/images/Drones_desktop.png'
import Button from '@/components/Button'

export default function FeaturedWork() {
  return (
    <div className='px-4 lg:py-32'>
      <div className='container mx-auto text-center'>
        <div className='space-y-2'>
          <h2 className='text-3xl font-black'>Featured Work</h2>
          <p className='text-lg'>
            Here are a few pieces of my work which I&apos;m really proud of
          </p>
        </div>
        <div className='flex flex-col items-center py-16 pl-8 space-y-4 md:pl-0 md:py-32 md:flex-row md:justify-between md:space-x-4 md:space-y-0'>
          <PortfolioPiece />
          <PortfolioPiece />
          <PortfolioPiece />
        </div>
        <Button caption='See More Work' href='#' className="mx-auto transition-all duration-300 transform border-4 border-black max-w-max hover:-translate-y-4 hover:bg-yellow-300 hover:shadow-xl" />
      </div>
    </div>
  )
}

const PortfolioPiece = () => {
  return (
    <div className='relative w-4/5 lg:w-1/4'>
      <div className='relative transition-all duration-300 transform shadow-2xl hover:shadow hover:translate-y-8 hover:-translate-x-8'>
        {/* overlay image */}
        <div className='absolute inset-0 z-10 w-full h-full transition-all duration-300 transform bg-black opacity-0 cursor-pointer hover:opacity-100'>
          <div className='flex flex-col py-8'>
            <p className='mb-2 text-lg font-bold text-white'>
              Drone Racing Landing Page
            </p>
            <p className='text-lg text-white'>
              Landing page with complex layout
            </p>
          </div>
          <Button
            caption='View project'
            href='#'
            type='primary'
            className='w-3/4 mx-auto'
            isProject={true}
          />
        </div>
        <Image
          src={drones}
          alt='Drones Landing Page'
          layout='responsive'
          objectFit='cover'
        />
      </div>
      <div className='absolute bottom-0 left-0 w-full h-full -mb-8 -ml-8 border-4 border-black -z-10'></div>
    </div>
  )
}
