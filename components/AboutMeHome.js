/* eslint-disable @next/next/no-img-element */
import SocialLink from "./SocialLink"
import {socials} from '../globalvars'

export default function AboutMeHome() {

  return (
    <div className='relative'>
      <div className='container px-4 py-32 mx-auto'>
        <div className='flex flex-col items-center md:flex-row md:justify-center'>
          <img
            src='/images/philip.png'
            alt='Photo of Philip'
            className='w-1/2 md:w-1/4 md:order-last'
          />
          <div className='flex flex-col items-center max-w-xl mt-8 space-y-6 text-lg text-center md:mt-0 md:text-left md:items-start md:mr-12'>
            <h2 className='text-3xl font-black'>So, who am I?</h2>
            <p>
              I am a fullstack developer based out of Toronto, ON, with a keen
              eye for User Interface and User Experience Design. I’m very
              passionate about crafting beautiful web experiences using
              JavaScript and modern web technologies. I’m naturally curious,
              confident, and love solving logical problems with a dash of
              design.
            </p>
            <p>
              Currently, I am searching for new full-time frontend or fullstack
              software engineering opportunities. If you are hiring, please feel
              free to contact me below or download my resume to take a look at
              where I’ve been.
            </p>
            <div className='flex space-x-4'>
              {socials.map(({ name, href }) => (
                <SocialLink name={name} href={href} key={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-0 w-full lg:-top-1/4 -z-10'>
        <img
          src='/images/svg/home/yellow_divider.svg'
          alt='Yellow divider'
          className='w-full'
        />
      </div>
    </div>
  )
}
