import Blob from '@/components/Blob'

const TopBlobs = ({ blobSrc1, blobSrc2 }) => {
  return (
    <div className='absolute flex justify-between w-full -mt-32 -z-10 sm:-mt-60'>
      <Blob
        src={blobSrc1}
        className='absolute left-0 w-1/2 max-w-4xl -ml-8 transform rotate-12 sm:-ml-36 lg:-mt-24 lg:-ml-60 xl:-mt-96'
      />
      <Blob
        src={blobSrc2}
        className='absolute right-0 w-1/2 max-w-4xl -mr-12 transform sm:-mr-36 xl:-rotate-45 xl:-mt-96'
      />
    </div>
  )
}

export default TopBlobs
