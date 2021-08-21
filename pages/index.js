import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PageLayout from '@/components/PageLayout'
import AboutMeHome from '@/components/AboutMeHome'
import FeaturedWork from '@/components/FeaturedWork'
import MySkills from '@/components/MySkills'
import ContactMe from '@/components/ContactMe'
import TopBlobs from '@/components/TopBlobs'
import Footer from '@/components/Footer'
import { getAuthor, getFeaturedProjects } from '@/lib/api'
import Alert from '@/components/Alert'
import { useState } from 'react'

export default function Home({ projects, author }) {
  const [closeAlert, setCloseAlert] = useState(false)
  return (
    <PageLayout>
      <Alert
        message='I am available for hire. '
        closeAlert={closeAlert}
        setCloseAlert={() => setCloseAlert(true)}
      />
      <div className='relative overflow-hidden'>
        <TopBlobs
          blobSrc1='/images/svg/home/orange_blob.svg'
          blobSrc2='/images/svg/home/yellow_blob.svg'
        />
        <Header />
        <Hero />
        <AboutMeHome author={author} />
        <FeaturedWork projects={projects} />
        <MySkills />
        <ContactMe />
        <Footer />
      </div>
    </PageLayout>
  )
}

export async function getStaticProps() {
  const projects = await getFeaturedProjects()
  const author = await getAuthor()

  return {
    props: {
      projects,
      author,
    },
  }
}
