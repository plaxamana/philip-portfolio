import Header from "@/components/Header"
import TopBlobs from "@/components/TopBlobs"
import Image from 'next/image'
import projImg from '@/images/project_image.png'
import Button from "@/components/Button"


export default function PortfolioItemPage() {
  return (
    <div className='relative overflow-hidden'>
      <TopBlobs
        blobSrc1='/images/svg/home/blue_blob.svg'
        blobSrc2='/images/svg/home/yellow_blob.svg'
      />
      <Header />
      <div className='container grid grid-cols-1 px-4 py-32 mx-auto gap-y-16 md:grid-cols-2 md:gap-x-4 lg:pt-60 lg:gap-x-16'>
        {/* Project Info */}
        <div className='space-y-4 text-lg'>
          <h2 className='text-3xl font-bold'>Done Racing Landing Page</h2>
          <p>
            Have you ever seen drones used for things other than capturing
            video? What if you could see drones racing from their point of view?
            Well that is what this page is all about, Drone Racing!
          </p>
          <p>
            This webpage experimented with column and grid-based layouts to give
            an interesting and unique feel to the design. This site was a great
            way for me to practice implementing different layouts and
            techniques.
          </p>
          {/* Badges */}
          <div className='pb-8'>
            <p className='mb-2 font-bold'>Developed with:</p>
            <div className='flex space-x-4'>
              <Badge
                style={{ background: 'bg-blue-200', text: 'text-blue-900' }}
                name='HTML'
              />
              <Badge
                style={{ background: 'bg-yellow-200', text: 'text-yellow-900' }}
                name='CSS'
              />
              <Badge
                style={{ background: 'bg-green-200', text: 'text-green-900' }}
                name='JavaScript'
              />
            </div>
          </div>
          {/* buttons */}
          <div className='md:flex md:flex-col lg:flex-row lg:space-x-4'>
            <Button
              icon='globe'
              href='https://plaxamana.github.io/drone_racing/'
              type='primary'
              caption='View Live Site'
              target='a_blank'
            />
            <Button
              icon='eye'
              href='https://github.com/plaxamana/drone_racing'
              caption='View Source Code'
              target='a_blank'
            />
          </div>
        </div>
        {/* Project image */}
        <div className='order-first md:order-last'>
          <Image src={projImg} alt='project image' layout='responsive' />
        </div>
      </div>
    </div>
  )
}


const Badge = ({name, style}) => {
  return (
    <div className={`flex items-center justify-center py-1 px-4 rounded-lg ${style.background}`}>
      <p className={`text-sm ${style.text}`}>{name}</p>
    </div>
  )
}