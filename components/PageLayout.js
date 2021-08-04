import Head from 'next/head'
import Footer from './Footer'

export default function PageLayout({ children, title, description, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta description={description} />
        <meta keywords={keywords} />
      </Head>
      {children}
      <Footer />
    </div>
  )
}

PageLayout.defaultProps = {
  title: 'Philip Laxamana | Fullstack Software Engineer',
  description: 'Philip Laxamana portfolio site',
  keywords: 'Developer, Software, NextJS, JavaScript, Tailwindcss',
}
