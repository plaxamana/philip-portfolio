import Image from 'next/image'

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
        <div className='flex py-16'>
          {/* <PortfolioPiece /> */}
        </div>
      </div>
    </div>
  )
}

const PortfolioPiece = () => {
  return (
    <div className='w-full bg-cover'>
      <Image
        src='/images/Drones_desktop.png'
        alt='Drones Landing Page'
        width={340}
        height={222}
      />
    </div>
  )
}
