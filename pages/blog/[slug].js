import Header from "@/components/Header";
import TopBlobs from "@/components/TopBlobs";

export default function BlogPostPage() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <TopBlobs
        blobSrc1='/images/svg/home/blue_blob.svg'
        blobSrc2='/images/svg/home/yellow_blob.svg'
      />
      <Header />
      <p>Hello world</p>
    </div>
  )
}
