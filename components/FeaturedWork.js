import Button from '@/components/Button'
import PortfolioPiece from '@/components/PortfolioPiece'
import { pages } from '../globalvars'

export default function FeaturedWork({ projects }) {
  return (
    <div className='px-4 lg:py-32'>
      <div className='container mx-auto text-center'>
        <div className='space-y-2'>
          <h2 className='text-3xl font-black'>Featured Work</h2>
          <p className='text-lg'>
            Here are a few pieces of my work which I&apos;m really proud of
          </p>
        </div>
        <div className='flex flex-col items-center py-16 pl-8 mb-16 space-y-32 md:mb-0 md:pl-0 md:py-32 md:flex-row md:justify-between md:space-y-0'>
          {projects.map(
            ({
              _id,
              title,
              slug,
              previewImage: {
                alt,
                url
              },
            }) => (
              <PortfolioPiece key={_id} title={title} url={url} slug={slug} alt={alt} />
            ),
          )}
        </div>
        <Button
          caption='See More Work'
          href={pages[1].href}
          className='mx-auto transition-all duration-300 transform border-4 border-black max-w-max hover:-translate-y-4 hover:bg-yellow-300 hover:shadow-xl'
        />
      </div>
    </div>
  )
}
