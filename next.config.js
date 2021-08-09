module.exports = {
  reactStrictMode: true,
  env: {
    SANITY_DATASET_NAME: process.env.SANITY_DATASET_NAME,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}
