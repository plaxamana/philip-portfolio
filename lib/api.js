import sanityClient from './sanity'

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

export async function getProjectBySlug(slug) {
  const results = await sanityClient.fetch(
    `*[_type == 'project' && slug.current == $slug]{
      ${projectFields}}`,
    { slug },
  )
  return results[0]
}

export async function getAuthor() {
  const results = await sanityClient.fetch(
    `*[_type == 'author']{
      avatar{alt, 'url': asset->.url},
      image{alt, 'url': asset->.url},
      bio[]{..., asset->},
      shortBio[]{..., asset->},
      'slug': slug.current
    }`
  )
  return results[0]
}