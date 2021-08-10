import Header from '@/components/Header'
import Image from 'next/image'
import topLeft from '@/images/svg/blog/top_left_blob.svg'
import topRight from '@/images/svg/blog/top_right_blob.svg'
import developer from '@/images/blogpage/developer1.jpg'
import do_great from '@/images/blogpage/do_great.jpg'
import do_more from '@/images/blogpage/do_more.jpg'
import wavy_divider from '@/images/svg/blog/wavy_divider_bottom.svg'
import Footer from '@/components/Footer'
import BlogPostCard from '@/components/BlogPostCard'
import { getAllPosts } from '@/lib/api'

export default function BlogPage({posts}) {
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
            {posts.map(post => (
              <BlogPostCard key={post._id} imgSrc={post.mainImage.url} imgAlt={post.mainImage.alt} slug={post.slug} excerpt={post.excerpt} title={post.title} date={post.publishedAt} />
            ))}
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

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts
    }
  }
}
