/* eslint-disable @next/next/no-img-element */
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

export default function AboutMeHome() {
  const socials = [
    { name: 'github', href: 'https://github.com/plaxamana' },
    { name: 'linkedin', href: 'https://linkedin.com/in/plaxamana' },
    { name: 'twitter', href: 'https://twitter.com/_plaxamana' },
  ]

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
              I am a fullstack developer with UI/UX Design skills. I started my
              journey into software development about 6 years ago when I first
              enrolled in college. When I first discovered about web design and
              development, I instantly fell in love with it. I’m naturally
              curious, confident, and love solving logical problems with a dash
              of design.
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

const SocialLink = ({ href, name }) => {
  switch (name) {
    case 'github':
      return (
        <a target='a_blank' href={href} className='hover:text-blue-500'>
          <FiGithub />
        </a>
      )
    case 'linkedin':
      return (
        <a target='a_blank' href={href} className='hover:text-blue-500'>
          <FiLinkedin />
        </a>
      )
    case 'twitter':
      return (
        <a target='a_blank' href={href} className='hover:text-blue-500'>
          <FiTwitter />
        </a>
      )
    case 'instagram':
      return (
        <a target='a_blank' href={href} className='hover:text-blue-500'>
          <FiInstagram />
        </a>
      )
  }
}