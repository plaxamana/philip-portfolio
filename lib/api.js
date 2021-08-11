import sanityClient, { previewClient } from './sanity'

const projectFields = `
  _id,
  title,
  body[]{..., asset->},
  isFeatured,
  categories[]->{title, type, classNames},
  codeRepo,
  liveSite,
  mainImage{alt, 'url':asset->.url},
  previewImage{alt, 'url': asset->.url},
  'slug': slug.current
`

const authorFields = `
  avatar{alt, 'url': asset->.url},
  image{alt, 'url': asset->.url},
  bio[]{..., asset->},
  shortBio[]{..., asset->},
  'slug': slug.current
`

const postFields = `
  _id,
  title,
  publishedAt,
  body[]{..., asset->},
  excerpt,
  mainImage{alt, 'url': asset->.url},
  'slug': slug.current
`

const getClient = preview => preview ? previewClient : sanityClient

export async function getFeaturedProjects() {
  const results = await sanityClient.fetch(
    `*[_type == 'project' && isFeatured == true] {${projectFields}}`,
  )
  return results
}

export async function getAllProjects() {
  const results = await sanityClient.fetch(
    `*[_type == 'project'] | order(date desc) {${projectFields}}`,
  )
  return results
}

export async function getProjectBySlug(slug, preview) {
  const client = getClient(preview)
  const results = await client.fetch(
    `*[_type == 'project' && slug.current == $slug]{
      ${projectFields}}`,
    { slug },
  )
  return results[0]
}

export async function getAuthor() {
  const results = await sanityClient.fetch(
    `*[_type == 'author']{
      ${authorFields}
    }`,
  )
  return results[0]
}

export async function getAllPosts() {
  const results = await sanityClient.fetch(
    `*[_type == 'post'] | order(publishedAt desc) {${postFields}}`,
  )
  return results
}

export async function getPostBySlug(slug, preview) {
  const client = getClient(preview)
  const results = await client.fetch(
    `*[_type == 'post' && slug.current == $slug]{
      ${postFields}
    }`,
    { slug },
  )
  return results[0]
}
