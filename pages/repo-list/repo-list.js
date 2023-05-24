const app = getApp()

const repoService = require('../../services/repo')

Page({
  data: {
    repoList: [],
    page: 1,
    token: null,
    owner: null
  },
  async lower() {
    const {
      owner,
      token
    } = this.data
    const page = this.data.page + 1;
    const repoList = await repoService.getRepoList({
      owner,
      token,
      page
    })
    this.setData({
      page,
      repoList: this.data.repoList.concat(repoList)
    })
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
    wx.navigateTo({
      url: `/pages/repo/repo?repo=${(encodeURIComponent(JSON.stringify(repoInfo)))}`,
    })
  },
  async onLoad(options) {
    let {
      owner,
      token
    } = JSON.parse(decodeURIComponent(options.data))
    const repoList = await repoService.getRepoList({
      owner,
      token
    })
    this.setData({
      repoList,
      token,
      owner
    })
  }
})