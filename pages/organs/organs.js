const app = getApp()

const repoService = require('../../services/repo')

Page({
  data: {
    organList: [],
    token: null
  },
  async onLoad(options) {
    let {
      owner,
      token
    } = JSON.parse(decodeURIComponent(options.data))
    const organList = await repoService.getOrganList({
      owner,
      token
    })
    console.log(organList)
    this.setData({
      organList,
      token
    })
  }
})