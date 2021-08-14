import TopBlobs from '@/components/TopBlobs'
import Header from '@/components/Header'
import Image from 'next/image'
import Message from '@/images/svg/thank-you/MessageReceived.svg'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import Footer from '@/components/Footer'

export default function ThankYouPage() {
  return (
    <PageLayout title='Message Received | Philip Laxamana'>
      <div className='relative overflow-hidden'>
        <TopBlobs
          blobSrc1='/images/svg/home/orange_blob.svg'
          blobSrc2='/images/svg/home/yellow_blob.svg'
        />
        <Header />
        <div className='max-w-2xl min-h-screen mx-auto text-center pt-60'>
          <div className='max-w-2xl p-4 mb-6'>
            <Image
              src={Message}
              layout='responsive'
              alt='Message Received'
            />
          </div>
          <div className='space-y-4 text-xl'>
            <h1 className='text-5xl font-bold text-blue-900 uppercase'>Message Received</h1>
            <p>I&apos;ll get back to you as soon as I can.  Thanks!</p>
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
