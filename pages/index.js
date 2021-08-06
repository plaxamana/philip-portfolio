import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Blob from '@/components/Blob'
import PageLayout from '@/components/PageLayout'
import AboutMeHome from '@/components/AboutMeHome'
import FeaturedWork from '@/components/FeaturedWork'
import MySkills from '@/components/MySkills'
import ContactMe from '@/components/ContactMe'

export default function Home() {
  return (
    <PageLayout>
      <div className='relative overflow-hidden'>
        <TopBlobs />
        <Header />
        <Hero />
        <AboutMeHome />
        <FeaturedWork />
        <MySkills />
        <ContactMe />
      </div>
    </PageLayout>
  )
}

const TopBlobs = () => {
  return (
    <div className='absolute flex justify-between w-full -mt-32 -z-10 sm:-mt-60'>
      <Blob
        src='/images/svg/home/orange_blob.svg'
        className='absolute left-0 w-1/2 max-w-4xl -ml-8 transform rotate-12 sm:-ml-36 lg:-mt-24 lg:-ml-60 xl:-mt-96'
      />
      <Blob
        src='/images/svg/home/yellow_blob.svg'
        className='absolute right-0 w-1/2 max-w-4xl -mr-12 transform sm:-mr-36 xl:-rotate-45 xl:-mt-96'
      />
    </div>
  )
}