const app = getApp()

const organService = require('../../services/organ')

Page({
  data: {
    organList: [],
    isMe:null
  },
  async onLoad(options) {
    const {owner,isMe} = JSON.parse(decodeURIComponent(options.data))
    const organList = await organService.getOrganList({
      owner,
      isMe
    })
    this.setData({
      organList,
      isMe
    })
  }
})