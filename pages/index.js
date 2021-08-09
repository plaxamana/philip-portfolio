import Header from '@/components/Header'
import Hero from '@/components/Hero'
import PageLayout from '@/components/PageLayout'
import AboutMeHome from '@/components/AboutMeHome'
import FeaturedWork from '@/components/FeaturedWork'
import MySkills from '@/components/MySkills'
import ContactMe from '@/components/ContactMe'
import TopBlobs from '@/components/TopBlobs'
import Footer from '@/components/Footer'
import { getFeaturedProjects } from '@/lib/api'
import { useState, useEffect } from 'react'

export default function Home() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function getProjects() {
      const results = await getFeaturedProjects()
      setProjects(results)
    }
    getProjects()
  },[])

  console.log(projects);

  return (
    <PageLayout>
      <div className='relative overflow-hidden'>
        <TopBlobs
          blobSrc1='/images/svg/home/orange_blob.svg'
          blobSrc2='/images/svg/home/yellow_blob.svg'
        />
        <Header />
        <Hero />
        <AboutMeHome />
        <FeaturedWork />
        <MySkills />
        <ContactMe />
        <Footer />
      </div>
    </PageLayout>
  )
}
