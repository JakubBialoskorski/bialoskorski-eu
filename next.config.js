const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  //const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `bialoskorski.eu/`
  basePath = `bialoskorski.eu`
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    loader: 'imgix',
    path: 'bialoskorski.imgix.net',
    //domains: ['bialoskorski.eu']
  },
}