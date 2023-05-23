const app = getApp()

const repoService = require('../../services/repo')

Page({
  data: {
    organList: [],
    token: null
  },
  async onLoad(options) {
    const {owner,token} = JSON.parse(decodeURIComponent(options.data))
    const organList = await repoService.getOrganList({
      owner,
      token
    })
    this.setData({
      organList,
      token
    })
  }
})