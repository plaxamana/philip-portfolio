import Header from '@/components/Header'
import Image from 'next/image'
import topLeft from '@/images/svg/blog/top_left_blob.svg'
import topRight from '@/images/svg/blog/top_right_blob.svg'
import Footer from '@/components/Footer'
import light_wave from '@/images/svg/blog/blog_post/lightblue_wavy_divider.svg'
import { getAllPosts, getPostBySlug } from '@/lib/api'
import { options } from '../../globalvars'
import PostContent from '@/components/PostContent'
import PreviewAlert from '@/components/PreviewAlert'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PageLayout from '@/components/PageLayout'

export default function BlogPostPage({ post, preview }) {
  const router = useRouter()
  if (!post) return <div />

  // if (!router.isFallback && !blog.slug) {
  //   return <ErrorPage statusCode='404' />
  // }

  // if (router.isFallback) {
  //   return <PageLayout>Loading...</PageLayout>
  // }

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
      <div className='px-4 py-32 lg:py-52'>
        <div className='container mx-auto'>
          <div className='mb-16 text-center'>
            {preview && <PreviewAlert />}
            <p className='mb-2 text-5xl font-black'>{post.title}</p>
            <p className='font-medium'>
              Posted on{' '}
              {new Date(post.publishedAt).toLocaleDateString('en-US', options)}
            </p>
          </div>
          <div className='max-w-5xl mx-auto mb-16'>
            <Image
              src={post.mainImage.url}
              alt={post.mainImage.alt}
              layout='responsive'
              objectFit='cover'
              height={545}
              width={1024}
            />
          </div>
          <div className='mx-auto prose prose-lg lg:prose-xl'>
            <PostContent content={post.body} />
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 w-full -z-20'>
        <Image
          src={light_wave}
          alt='light wave divider'
          layout='responsive'
          objectFit='cover'
        />
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await getAllPosts()
  const paths = posts.map((post) => ({ params: { slug: post.slug } }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params: { slug }, preview = false }) {
  const post = await getPostBySlug(slug, preview)

  return {
    props: {
      post,
      preview,
    },
    revalidate: 1,
  }
}
