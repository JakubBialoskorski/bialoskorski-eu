// Below configuration is only needed when using GitHub Pages native domains.
// It can be safely disabled when using custom domain.

// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = '/'

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }

const nextConfig = {
  output: 'export',
  images: {
    loader: 'imgix',
    path: 'bialoskorski-eu.imgix.net',
    //domains: ['bialoskorski.eu']
  }
}

module.exports = nextConfig