import styles from '@/styles/About.module.css'
import Image from 'next/image'
import bluewave from '@/images/svg/about/top_blue_wave.svg'
import Header from '@/components/Header'
import PageLayout from '@/components/PageLayout'
import SocialLink from '@/components/SocialLink'
import Footer from '@/components/Footer'
import { socials } from '../globalvars'
import BlockContent from '@sanity/block-content-to-react'
import { getAuthor } from '@/lib/api'

export default function AboutPage({ author }) {
  return (
    <PageLayout title='About Me | Philip Laxamana | Fullstack Software Engineer'>
      <div className='relative'>
        <Header />
        <div
          className={`-z-10 absolute top-0 left-0 right-0 w-full ${styles.background}`}
        >
          <Image
            src={bluewave}
            layout='responsive'
            alt='blue wave background'
          />
        </div>
        <div className='max-w-6xl min-h-screen px-4 py-32 mx-auto md:pt-52'>
          <div className='flex flex-col md:flex-row'>
            {/* About Me Text */}
            <div className='flex flex-col mt-24 space-y-6 text-lg md:max-w-lg lg:max-w-3xl md:mt-0 md:pr-16 lg:pr-32'>
              <h1 className='text-4xl font-black'>About Me.</h1>
              <div className='prose-lg'>
                <BlockContent blocks={author.bio} />
              </div>
              <div className='flex space-x-4'>
                {socials.map(({ name, href }) => (
                  <SocialLink name={name} href={href} key={name} />
                ))}
              </div>
            </div>
            {/* Picture of Me */}
            <div className='relative self-start order-first w-3/4 mx-auto md:w-full md:order-last lg:ml-0'>
              <div className='transition-all duration-300 transform -translate-x-4 -translate-y-4 shadow-xl hover:translate-x-0 hover:translate-y-0 hover:shadow-none'>
                <Image
                  src={author.image.url}
                  width={330}
                  height={600}
                  objectFit='cover'
                  layout='responsive'
                  alt='photo of philip'
                />
              </div>
              <div className='absolute bottom-0 right-0 w-full h-full border-4 border-black -z-10'></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const author = await getAuthor()

  return {
    props: {
      author,
    },
  }
}
