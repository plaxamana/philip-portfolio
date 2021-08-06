import Image from 'next/image'
import uiux from '@/images/svg/home/UIUX_Icon.svg'
import fsdev from '@/images/svg/home/FSDEV_Icon.svg'
import Blob from './Blob'

export default function MySkills() {
  const devTools = [
    'Github',
    'Netlify',
    'Vercel',
    'Linux',
    'VS Code',
    'Visual Studio',
    'Terminal',
    'Cmder (for Windows)',
    'PostgreSQL',
    'Postman',
  ]

  const languages = [
    'ReactJS',
    'NextJS',
    'NodeJS',
    'Express',
    'TailwindCSS',
    'Java',
    'SQL',
    'JavaScript',
    'HTML',
    'CSS',
  ]

  const designTools = [
    'Figma',
    'Adobe XD',
    'Adobe Photoshop',
    'Webflow',
    'Adobe Illustrator',
  ]

  return (
    <div className="relative">
      <div className='px-4 py-16 lg:py-32'>
        <div className='container mx-auto text-center'>
          <div className='flex flex-col items-center space-y-2'>
            <h2 className='text-3xl font-black'>What I can do</h2>
            <p className='max-w-xl text-lg'>
              These are the things that I’m most comfortable and familiar with
              that I’ve acquired over the past 6 years
            </p>
          </div>
          {/* My Features Container */}
          <div className='flex flex-col items-center justify-between max-w-4xl py-16 mx-auto space-y-16 md:flex-row md:space-y-0'>
            {/* Feature container */}
            <div className='flex flex-col max-w-xs space-y-4'>
              <div>
                <Image src={uiux} width={100} height={78} alt='UI Cursor icon' />
              </div>
              <p className='text-lg font-bold'>UI/UX Design</p>
              <p>
                I value simple and clean designs that are functional and not
                confusing.
              </p>
            </div>
            <div className='flex flex-col max-w-xs space-y-4'>
              <div>
                <Image src={fsdev} width={80} height={74} alt='UI Cursor icon' />
              </div>
              <p className='text-lg font-bold'>Fullstack Development</p>
              <p>
                Development from front to back. I bring beautifully designed UIs
                to life and implement the logic to make it work
              </p>
            </div>
          </div>
          {/* My Skills Container */}
          <div className='flex flex-col py-16 space-y-12 md:flex-row md:justify-between md:space-y-0'>
            {/* Category Container */}
            <div>
              <p className='mb-4 text-lg font-bold'>Dev Tools/Technologies</p>
              <ul className='flex flex-col items-center space-y-4'>
                {devTools.map((tool) => (
                  <li className='text-lg' key={tool}>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className='mb-4 text-lg font-bold'>Languages/Frameworks</p>
              <ul className='flex flex-col items-center space-y-4'>
                {languages.map((tool) => (
                  <li className='text-lg' key={tool}>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className='mb-4 text-lg font-bold'>Design Tools</p>
              <ul className='flex flex-col items-center space-y-4'>
                {designTools.map((tool) => (
                  <li className='text-lg' key={tool}>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-0 flex justify-between w-full -z-10'>
        <Blob src='/images/svg/home/orange_left_side.svg' className='w-1/5' />
        <Blob
          src='/images/svg/home/yellow_blob.svg'
          className='hidden w-1/4 md:block -mb-96'
        />
        <Blob src='/images/svg/home/blue_right_side.svg' className='w-1/5' />
      </div>
    </div>
  )
}
