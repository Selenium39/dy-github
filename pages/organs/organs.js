const app = getApp()

const organService = require('../../services/organ')

Page({
  data: {
    organList: [],
    token: null
  },
  async onLoad(options) {
    const {owner,token} = JSON.parse(decodeURIComponent(options.data))
    const organList = await organService.getOrganList({
      owner,
      token
    })
    this.setData({
      organList,
      token
    })
  }
})