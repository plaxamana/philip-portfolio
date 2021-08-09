import sanityClient from './sanity'

const projectFields = `
  _id,
  title,
  isFeatured,
  previewImage{alt, asset->{url}},
  slug{current}
`
export async function getFeaturedProjects() {
  const results = await sanityClient.fetch(
    `*[_type == 'project' && isFeatured == true] {${projectFields}}`
  )
  return results
}

export async function getAllProjects() {
  const results = await sanityClient.fetch(
    `*[_type == 'project']{${projectFields}}`
  )
  return results
}