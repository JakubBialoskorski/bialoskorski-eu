// Below configuration required by next 14.x

const nextConfig = {
  output: 'export',
  images: {
    loader: 'imgix',
    path: 'bialoskorski.imgix.net',
  }
}

module.exports = nextConfig