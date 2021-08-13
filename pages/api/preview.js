import { getPostBySlug, getProjectBySlug, } from '@/lib/api'

export default async function enablePreviewPost(req, res) {
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'invalid token' })
  }

  const blog = await getPostBySlug(req.query.slug, true)
  if (!blog) {
    return res.status(401).json({ message: 'invalid slug' })
  }

  // setPreviewData will set cookies into your browser
  // __prerender_bypass __next_preview_data
  res.setPreviewData({})
  res.writeHead(307, { Location: `/blog/${blog.slug}` })
  res.end()
}

// export async function enablePreviewProject(req, res) {
//   if (
//     req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
//     !req.query.slug
//   ) {
//     return res.status(401).json({ message: 'invalid token' })
//   }

//   const project = await getProjectBySlug(req.query.slug, true)
//   if (!project) {
//     return res.status(401).json({ message: 'invalid slug' })
//   }

//   // setPreviewData will set cookies into your browser
//   // __prerender_bypass __next_preview_data
//   res.setPreviewData({})
//   res.writeHead(307, { Location: `/portfolio/${project.slug}` })
//   res.end()
// }
