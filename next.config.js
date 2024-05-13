/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: {
    loader: 'imgix',
    path: 'bialoskorski.imgix.net',
  }
}
 
module.exports = nextConfig