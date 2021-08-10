import TopBlobs from '@/components/TopBlobs'
import Header from '@/components/Header'
import Image from 'next/image'
import errorSvg from '@/images/svg/404/error404.svg'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import Footer from '@/components/Footer'

export default function Page404() {
  return (
    <PageLayout>
      <div className='relative overflow-hidden'>
        <TopBlobs
          blobSrc1='/images/svg/home/orange_blob.svg'
          blobSrc2='/images/svg/home/yellow_blob.svg'
        />
        <Header />
        <div className='max-w-2xl min-h-screen mx-auto text-center pt-60'>
          <div className='max-w-2xl p-4 mb-6'>
            <Image
              src={errorSvg}
              layout='responsive'
              alt='Cat stuck in computer'
            />
          </div>
          <div className='space-y-4 text-xl'>
            <h1 className='text-5xl font-bold text-blue-900'>OOPS!</h1>
            <p>We can&apos;t seem to find the page you&apos;re looking for.</p>
            <p>
              Return to{' '}
              <Link href='/'>
                <a>
                  <span className='font-bold text-yellow-600 hover:underline'>
                    Home
                  </span>
                </a>
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </PageLayout>
  )
}
