const repoService = require('../../services/repo')
const base64Util = require('../../utils/base64')
const app = getApp()

Page({
  data: {
    fileContent:null,
  },
  async onLoad(options) {
    const { owner, repo, path } = JSON.parse(decodeURIComponent(options.data))
    const {content} = await repoService.getRepoContent({
      owner,
      repo,
      path
    })
    const contentStr = base64Util.decode(content)
    const fileContent = app.towxml(contentStr,'markdown')
    this.setData({
      fileContent
    })
  }
})