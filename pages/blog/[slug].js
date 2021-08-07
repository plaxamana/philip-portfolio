import Header from '@/components/Header'
import Image from 'next/image'
import topLeft from '@/images/svg/blog/top_left_blob.svg'
import topRight from '@/images/svg/blog/top_right_blob.svg'
import do_great from '@/images/blogpage/do_great.jpg'
import Footer from '@/components/Footer'
import light_wave from '@/images/svg/blog/blog_post/lightblue_wavy_divider.svg'

export default function BlogPostPage() {
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
            <p className='mb-2 text-5xl font-black'>
              How To Be Great at Developing
            </p>
            <p className='font-medium'>Posted on 07/24/2021</p>
          </div>
          <div className='max-w-5xl mx-auto mb-16'>
            <Image
              src={do_great}
              alt='do great'
              layout='responsive'
              objectFit='cover'
              height={245}
            />
          </div>
          <div className='mx-auto prose prose-lg'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
              tellus dignissim quis nibh vivamus porta arcu. Elit sed dignissim
              lorem blandit sed. Mi et proin sit sit quis suspendisse vel. A sem
              habitant quis dui urna malesuada posuere. Pellentesque tortor
              egestas natoque quisque nulla eu. Ultrices elementum lectus
              blandit dictumst nunc egestas ipsum congue leo. Hac nullam sed
              tincidunt arcu. Felis, aliquet pharetra mi nisi, consectetur at
              integer in. Aliquam posuere massa tincidunt felis, pharetra
              commodo integer turpis. Vel viverra diam duis amet ornare semper
              egestas. Dictum potenti urna in cursus phasellus mi urna id.
              Feugiat netus libero lectus sit nisl lectus pharetra. Amet, tortor
              aenean tortor, sed. Semper fusce turpis mi dignissim vulputate
              proin adipiscing.{' '}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              odio amet, ullamcorper sagittis, volutpat praesent varius at et.
              Nec et quam neque cras urna non ullamcorper consectetur. Ultrices
              pellentesque egestas aliquet mauris. Diam feugiat arcu, feugiat
              morbi non sagittis. Gravida neque eu, nulla et sed faucibus
              viverra. Enim egestas at tristique at venenatis. Eu turpis odio
              magna felis laoreet erat. Ac mauris aliquam dictum interdum
              mauris. Pellentesque nunc dis duis neque. Nisl, suscipit a,
              blandit rutrum eget lorem et odio purus. Luctus enim aliquam
              gravida egestas vel mauris. Nunc eget sed nunc, arcu dui gravida
              non massa. Eu proin morbi imperdiet proin.
            </p>
            <p>
              You just need to start. That’s all you have to do be great. Get
              started and figure out the rest along the way.
            </p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 w-full -z-20'>
        <Image src={light_wave} alt='light wave divider' layout='responsive' objectFit='cover' />
      </div>
      <Footer />
    </div>
  )
}
