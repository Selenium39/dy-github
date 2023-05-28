const repoService = require('../../services/repo')
const base64Util = require('../../utils/base64')
const app = getApp()

Page({
  data: {
    fileContent: null,
  },
  async onLoad(options) {
    const { owner, repo, path } = JSON.parse(decodeURIComponent(options.data))
    const { content } = await repoService.getRepoContent({
      owner,
      repo,
      path
    })
    const matches = path.match(/\.([^./\\]+)$/)
    const language = matches ? matches[1] : 'shell'
    console.log(language)
    const contentStr = '```' + language + base64Util.decode(content) + '```'
    const fileContent = app.towxml(contentStr, 'markdown')
    this.setData({
      fileContent
    })
  }
})