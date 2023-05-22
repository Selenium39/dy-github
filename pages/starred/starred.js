const app = getApp()

const repoService = require('../../services/repo')

Page({
  data: {
    repoList: [],
    token: null
  },
  async showRepo(event) {
    const {
      repo,
      owner
    } = event.target.dataset
    const repoInfo = await repoService.getRepo({
      repo,
      owner,
      token: this.data.token
    })
    console.log(repoInfo.stargazers_count)
    wx.navigateTo({
      url: `/pages/repo/repo?repo=${(encodeURIComponent(JSON.stringify(repoInfo)))}`,
    })
  },
  async onLoad(options) {
    let {
      owner,
      token
    } = JSON.parse(decodeURIComponent(options.data))
    const repoList = await repoService.getStarredList({
      owner,
      token
    })
    console.log(repoList)
    this.setData({
      repoList,
      token
    })
  }
})