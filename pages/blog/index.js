import Header from '@/components/Header'
import Image from 'next/image'
import topLeft from '@/images/svg/blog/top_left_blob.svg'
import topRight from '@/images/svg/blog/top_right_blob.svg'
import developer from '@/images/blogpage/developer1.jpg'
import do_great from '@/images/blogpage/do_great.jpg'
import do_more from '@/images/blogpage/do_more.jpg'
import wavy_divider from '@/images/svg/blog/wavy_divider_bottom.svg'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function BlogPage() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='absolute top-0 left-0 right-0 flex justify-between w-full'>
        <div className='w-1/4'>
          <Image src={topLeft} alt='blob' layout='responsive' />
        </div>
        <div className='w-1/4'>
          <Image src={topRight} alt='blob' layout='responsive' />
        </div>
      </div>
      <Header />
      <div className='z-10 px-4 py-52'>
        <div className='container mx-auto'>
          <div className='mb-32 text-lg text-center'>
            <p className='mb-4 text-4xl font-black'>A Collection of Thoughts</p>
            <p>Welcome to my blog posts page!</p>
          </div>
          <div className='grid justify-center gap-y-12 md:gap-x-16 md:grid-cols-2 xl:grid-cols-3 lg:gap-16'>
            <BlogPostCard imgSrc={developer} />
            <BlogPostCard imgSrc={do_more} />
            <BlogPostCard imgSrc={do_great} />
          </div>
        </div>
      </div>
      <div className='absolute w-full min-h-screen -bottom-1/4 -z-20'>
        <div className='w-full -z-10'>
          <Image src={wavy_divider} alt='divider' layout='responsive' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

const BlogPostCard = ({ imgSrc }) => {
  return (
    <div className='relative'>
      <div className='flex flex-col justify-between max-w-lg transition-all duration-300 transform bg-white shadow-2xl md:translate-x-4 md:-translate-y-4 hover:translate-y-0 hover:translate-x-0'>
        {/* Image container */}
        <div className='w-full'>
          <Image
            src={imgSrc}
            alt='developer'
            layout='responsive'
            objectFit='cover'
            height={300}
          />
        </div>
        {/* Post body */}
        <div className='p-4 space-y-4'>
          <div className='mb-4 text-sm'>
            <p className='mb-1 text-lg font-bold'>
              How To Be Great at Developing
            </p>
            <p>07/24/2021</p>
          </div>
          <p className='leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            reprehenderit minus quos necessitatibus rerum ipsam voluptas sint
            perferendis quisquam similique? Minus eos eaque quod esse quidem
            deserunt voluptatum asperiores?
          </p>
          <Link href='/blog/post'>
            <a className='inline-block text-blue-500 hover:underline'>
              Read More
            </a>
          </Link>
        </div>
      </div>
      <div className='absolute inset-0 hidden w-full h-full border-4 border-black md:block -z-10'></div>
    </div>
  )
}
