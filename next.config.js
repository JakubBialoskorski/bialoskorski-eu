// const isGithubActions = process.env.GITHUB_ACTIONS || false

// let assetPrefix = ''
// let basePath = '/'

// if (isGithubActions) {
//   const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

//   assetPrefix = `/${repo}/`
//   basePath = `/${repo}`
// }



module.exports = {
  basePath: process.env.NODE_ENV === "production" ? "/bialoskorski.eu" : undefined,
  assetPrefix: process.env.NODE_ENV === "production" ? "/bialoskorski.eu" : undefined,
  images: {
    loader: 'imgix',
    path: 'bialoskorski.imgix.net',
    //domains: ['bialoskorski.eu']
  },
}