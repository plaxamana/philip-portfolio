/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import BlockContent from '@sanity/block-content-to-react'
import HighlightCode from '@/components/HighlightCode'
// import { urlFor } from 'lib/api'

export const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => (
      <div>
        <HighlightCode language={language}>
          {code}
        </HighlightCode>
        <div className='italic text-center'>{filename}</div>
      </div>
    ),
    image: ({ node: { asset, alt, position = 'center' } }) => {
      return (
        <div className={`blog-image blog-image-${position}`}>
          {/* src={urlFor(asset.url).width(500).fit('max').url()} */}
          <img className='mx-auto' src={asset.url} alt={alt} />
          <div className='italic text-center'>{alt}</div>
        </div>
      )
    },
  },
}

export default function PostContent({ content }) {
  return (
    <BlockContent
      blocks={content}
      serializers={serializers}
      // imageOptions={{ w: 320, h: 240, fit: 'max' }}
    />
  )
}
