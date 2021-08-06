import Header from '@/components/Header'
import TopBlobs from '@/components/TopBlobs'
import PortfolioPiece from '@/components/PortfolioPiece'
import Footer from '@/components/Footer'

export default function PortfolioPage() {
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
            <PortfolioPiece />
            <PortfolioPiece />
            <PortfolioPiece />
            <PortfolioPiece />
            <PortfolioPiece />
            <PortfolioPiece />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
