import Image from 'next/image'
import Link from 'next/link'
import { options } from 'globalvars'

const BlogPostCard = ({ imgSrc, imgAlt, slug, excerpt, title, date }) => {
  return (
    <div className='relative'>
      <div className='flex flex-col justify-between max-w-lg transition-all duration-300 transform bg-white shadow-2xl md:translate-x-4 md:-translate-y-4 hover:translate-y-0 hover:translate-x-0'>
        {/* Image container */}
        <div className='w-full'>
          <Image
            src={imgSrc}
            alt={imgAlt}
            layout='responsive'
            objectFit='cover'
            height={200}
            width={366}
          />
        </div>
        {/* Post body */}
        <div className='p-4 space-y-4'>
          <div className='mb-4 text-sm'>
            <p className='mb-1 text-lg font-bold'>{title}</p>
            <p>{new Date(date).toLocaleDateString('en-US', options)}</p>
          </div>
          <p className='leading-relaxed'>{excerpt}</p>
          <Link href={`/blog/${slug}`}>
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

export default BlogPostCard
