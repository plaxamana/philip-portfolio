/* eslint-disable @next/next/no-img-element */
import SocialLink from './SocialLink'
import { socials } from '../globalvars'
import BlockContent from '@sanity/block-content-to-react'

export default function AboutMeHome({ author }) {
  return (
    <div className='relative lg:py-32'>
      <div className='container px-4 py-32 mx-auto'>
        <div className='flex flex-col items-center md:flex-row md:justify-center'>
          <img
            src='/images/philip.png'
            alt='Photo of Philip'
            className='w-1/2 md:w-1/4 md:order-last'
          />
          <div className='flex flex-col items-center max-w-xl mt-8 space-y-6 text-lg text-center md:mt-0 md:text-left md:items-start md:mr-12'>
            <h2 className='text-3xl font-black'>So, who am I?</h2>
            <div className='prose-lg'>
              <BlockContent blocks={author.shortBio} />
            </div>
            <div className='flex space-x-4'>
              {socials.map(({ name, href }) => (
                <SocialLink name={name} href={href} key={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-0 w-full -z-20 md:mt-32 lg:mt-0'>
        <img
          src='/images/svg/home/yellow_divider.svg'
          alt='Yellow divider'
          className='w-full'
        />
      </div>
    </div>
  )
}
