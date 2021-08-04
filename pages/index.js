import Header from '../components/Header'
import Hero from '../components/Hero'
import Blob from '../components/Blob'
import PageLayout from '../components/PageLayout'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <PageLayout>
      <div className='relative overflow-hidden'>
        <div className='absolute flex justify-between w-full -mt-32 -z-10 sm:-mt-60 xl:-top-1/4'>
          <Blob
            src='/images/svg/home/orange_blob.svg'
            className='absolute left-0 w-1/2 max-w-4xl -ml-8 sm:-ml-36 lg:-mt-24 lg:-ml-60 xl:-ml-96'
          />
          <Blob
            src='/images/svg/home/yellow_blob.svg'
            className='absolute right-0 w-1/2 max-w-4xl -mr-12 sm:-mr-36 lg:-mt-24 xl:-mr-60'
          />
        </div>
        <Header />
        <Hero />
        <Footer />
      </div>
    </PageLayout>
  )
}
