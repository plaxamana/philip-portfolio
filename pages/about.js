import styles from '@/styles/About.module.css'
import Image from 'next/image'
import bluewave from '@/images/svg/about/top_blue_wave.svg'
import me from '@/images/phil_about.jpg'
import Header from '@/components/Header'
import PageLayout from '@/components/PageLayout'
import SocialLink from '@/components/SocialLink'
import Footer from '@/components/Footer'
import { socials } from '../globalvars'


export default function AboutPage() {
  return (
    <PageLayout title='About Me | Philip Laxamana | Software Engineer'>
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
              <p>
                My name is Philip. I am a fullstack software engineer based out
                of Toronto, ON Canada. I’ve been creating websites since 2016,
                and still create websites today. When I was studying Software
                Engineering in college, I found a deep interest in web and web
                application development. To me, it was the perfect mix between
                solving problems logically, and applying a bit of art design.
                Since then, I’ve been always learning about different ways to
                build my projects and how to make them both usable and
                aesthetic.
              </p>
              <p>
                Currently, I am searching for new{' '}
                <span className='font-bold'>
                  full-time frontend or fullstack software engineering
                </span>{' '}
                opportunities. My current tech stack consists of: React/Next,
                Node, Express, MongoDB/PostgreSQL. I primarily code in
                JavaScript, since the frameworks mentioned above use it.
                However, I do have experience with more object-oriented
                programming languages like Java and C#. As an added bonus, I do
                have a bit of knowledge on UI/UX Design (as you can see from my
                site :))
              </p>
              <p>
                When I’m not coding, I enjoy working out, watching anime and
                doing photography.
              </p>
              <div className='flex space-x-4'>
                {socials.map(({ name, href }) => (
                  <SocialLink name={name} href={href} key={name} />
                ))}
              </div>
            </div>
            {/* Picture of Me */}
            <div className='relative self-start order-first w-3/4 mx-auto md:w-full md:order-last lg:ml-0'>
              <div className='transition-all duration-300 transform -translate-x-4 -translate-y-4 shadow-xl hover:translate-x-0 hover:translate-y-0 hover:shadow-none'>
                <Image src={me} layout='responsive' alt='photo of philip' />
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
