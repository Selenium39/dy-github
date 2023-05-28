const prService = require('../../services/pr')
const app = getApp()

Page({
  data: {
    prList: [],
    repo: null,
    owner: null
  },
  async showPr(event) {
    // todo 后续显示具体的pr
  },
  async onLoad(options) {
    const { owner, repo } = JSON.parse(decodeURIComponent(options.data))
    const res = await prService.getPrList({
      owner,
      repo,
    })
    this.setData({
      prList: res,
      owner,
      repo
    })
  }
})