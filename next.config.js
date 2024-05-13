const { default: next } = require('next')

// Below configuration required by next 14.x

**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'imgix',
    path: 'bialoskorski.imgix.net',
  }
}

module.exports = nextConfig