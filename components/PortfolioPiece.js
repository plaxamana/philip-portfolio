import Button from './Button'
import Image from 'next/image'

const PortfolioPiece = ({ title, slug, url }) => {
  return (
    <div className='relative w-4/5 mx-auto md:max-w-md'>
      <div className='transition-all duration-300 transform translate-x-4 -translate-y-4 shadow-2xl hover:translate-x-0 hover:translate-y-0 hover:shadow'>
        <div className='absolute inset-0 z-10 w-full h-full transition-all duration-300 transform bg-black opacity-0 cursor-pointer hover:opacity-100'>
          <div className='flex flex-col items-center py-8'>
            <p className='mb-2 text-lg font-bold text-white'>
              {title}
            </p>
          </div>
          <Button
            caption='View project'
            href={`/portfolio/${slug}`}
            type='primary'
            className='w-3/4 mx-auto'
            isProject={true}
          />
        </div>
        <Image
          src={url}
          alt='Drones Landing Page'
          layout='responsive'
          objectFit='cover'
          width={330}
          height={212}
        />
      </div>
      <div className='absolute bottom-0 left-0 w-full h-full border-4 border-black -z-10'></div>
    </div>
  )
}

export default PortfolioPiece
