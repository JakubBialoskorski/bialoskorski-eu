const isGithubActions = process.env.GITHUB_ACTIONS || false

assetPrefix = ''
basePath = '/'

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: 'bialoskorski.imgix.net',
    //domains: ['bialoskorski.eu']
  },
}