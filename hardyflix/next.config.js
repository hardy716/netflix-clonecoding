/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: {
    domains: ['rb.gy', 'image.tmdb.org'],
  },
}