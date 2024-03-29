const repoService = require('../../services/repo')
const base64Util = require('../../utils/base64')
const app = getApp()

Page({
  data: {
    fileContent: null,
    isLoading:true
  },
  async onLoad(options) {
    const { owner, repo, path,branch } = JSON.parse(decodeURIComponent(options.data))
    const { content } = await repoService.getRepoContent({
      owner,
      repo,
      path,
      branch
    })
    const matches = path.match(/\.([^./\\]+)$/)
    const language = matches ? matches[1] : 'shell'
    const contentStr = '```' + language+'\n' + base64Util.decode(content)+ '```'
    const fileContent = app.towxml(contentStr, 'markdown')
    this.setData({
      fileContent,
      isLoading:false
    })
  }
})