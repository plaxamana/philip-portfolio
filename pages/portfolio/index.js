import Header from '@/components/Header'
import TopBlobs from '@/components/TopBlobs'
import PortfolioPiece from '@/components/PortfolioPiece'
import Footer from '@/components/Footer'
import { getAllProjects } from '@/lib/api'
import { useGetProjects } from '@/actions/index'

export default function PortfolioPage({ projects: initialData }) {

  const { data: projects, error } = useGetProjects(initialData)

  return (
    <div className='relative overflow-hidden'>
      <TopBlobs
        blobSrc1='/images/svg/home/blue_blob.svg'
        blobSrc2='/images/svg/home/yellow_blob.svg'
      />
      <Header />
      <div className='py-60'>
        <div className='container mx-auto'>
          <div className='space-y-4 text-lg text-center'>
            <p className='text-5xl font-black'>You wanted to see more work?</p>
            <p>Well, here you go. Take a look below.</p>
          </div>
          <div className='grid grid-cols-1 mt-32 gap-y-16 md:grid-cols-2 xl:grid-cols-3'>
            {projects.map(
              ({ _id, title, slug, previewImage: { alt, url } }) => (
                <PortfolioPiece
                  key={_id}
                  title={title}
                  url={url}
                  slug={slug}
                  alt={alt}
                />
              ),
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const projects = await getAllProjects()
  return {
    props: {
      projects,
    },
  }
}
