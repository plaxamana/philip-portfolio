import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopBlobs from '@/components/TopBlobs'
import Image from 'next/image'
import Button from '@/components/Button'
import Badge from '@/components/Badge'
import { getAllProjects, getProjectBySlug } from '@/lib/api'
import BlockContent from '@sanity/block-content-to-react'
import PreviewAlert from '@/components/PreviewAlert'

export default function PortfolioItemPage({ project, preview }) {
  if (!project) return <div />

  return (
    <div className='relative min-h-screen overflow-hidden'>
      <TopBlobs
        blobSrc1='/images/svg/home/blue_blob.svg'
        blobSrc2='/images/svg/home/yellow_blob.svg'
      />
      { <PreviewAlert />}
      <Header />
      <div className='container px-4 py-32 mx-auto lg:pt-48'>
        <div className='grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-4 lg:gap-x-16 md:mb-16'>
          {/* Project Info */}
          <div className='space-y-4 text-lg'>
            <h2 className='text-3xl font-bold'>{project.title}</h2>
            <div className='prose-lg'>
              <BlockContent blocks={project.body} />
            </div>
            {/* Badges */}
            <div className='pb-8'>
              <p className='mb-2 font-bold'>Developed with:</p>
              <div className='flex flex-wrap space-x-2'>
                {project.categories.map(({ title }) => (
                  <Badge key={title} title={title} />
                ))}
              </div>
            </div>
            {/* buttons */}
            <div className='text-base md:flex md:flex-col lg:flex-row lg:space-x-4'>
              <Button
                icon='globe'
                href={project.liveSite}
                type='primary'
                caption='View Live Site'
                target='_blank'
              />
              <Button
                icon='eye'
                href={project.codeRepo}
                caption='View Source Code'
                target='_blank'
              />
            </div>
          </div>
          {/* Project image */}
          <div className='order-first md:order-last'>
            <Image
              src={project.mainImage.url}
              alt={project.mainImage.alt}
              layout='responsive'
              objectFit='cover'
              height={470}
              width={586}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const projects = await getAllProjects()
  const paths = projects.map((project) => ({ params: { slug: project.slug } }))

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const project = await getProjectBySlug(slug)

  return {
    props: {
      project,
    },
    revalidate: 1,
  }
}
