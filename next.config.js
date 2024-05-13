/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    loader: 'imgix',
    path: 'bialoskorski.imgix.net',
  },
  // Updated output configuration for Next.js 14.x
  output: 'export'
}
