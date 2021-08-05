import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Blob from '@/components/Blob'
import PageLayout from '@/components/PageLayout'
import AboutMeHome from '@/components/AboutMeHome'
import FeaturedWork from '@/components/FeaturedWork'
import MySkills from '@/components/MySkills'

export default function Home() {
  return (
    <PageLayout>
      <div className='relative overflow-hidden'>
        <div className='absolute flex justify-between w-full -mt-32 -z-10 sm:-mt-60 xl:-top-1/4'>
          <Blob
            src='/images/svg/home/orange_blob.svg'
            className='absolute left-0 w-1/2 max-w-4xl -ml-8 transform rotate-12 sm:-ml-36 lg:-mt-24 lg:-ml-60 xl:mt-24'
          />
          <Blob
            src='/images/svg/home/yellow_blob.svg'
            className='absolute right-0 w-1/2 max-w-4xl -mr-12 transform sm:-mr-36 lg:-mt-24 xl:mt-32 xl:-mr-12 xl:-rotate-45'
          />
        </div>
        <Header />
        <Hero />
        <AboutMeHome />
        <FeaturedWork />
        <div className='relative'>
          <MySkills />
          <div className='absolute top-0 flex justify-between w-full -z-10'>
            <Blob
              src='/images/svg/home/orange_left_side.svg'
              className='w-1/5'
            />
            <Blob src='/images/svg/home/yellow_blob.svg' className='w-1/4 -mb-96' />
            <Blob
              src='/images/svg/home/blue_right_side.svg'
              className='w-1/5'
            />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
