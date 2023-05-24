const app = getApp()

const repoService = require('../../services/repo')
const starService = require('../../services/star')

Page({
  data: {
    repoList: [],
    token: null,
    owner:null,
    page:1
  },
  async lower() {
    const {
      owner,
      token
    } = this.data
    const page = this.data.page + 1;
    const repoList = await starService.getStarredList({
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
    const repoList = await starService.getStarredList({
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