import Toast from '@vant/weapp/toast/toast';
const userService = require('../../services/user')

const app = getApp()

Page({
  data: {
    token: null
  },
  onLoad: function () {
    if (app.globalData.token) {
      this.setData({
        token:app.globalData.token
      })
    }
  },
  copy(e) {
    const text = e.currentTarget.dataset.text;
    wx.setClipboardData({
      data: text
    })
  },
  async login() {
    if (!this.data.token) {
      Toast.fail('Token不能为空')
      return
    }
    const userInfo = await userService.getAuthenticatedUser(this.data.token)
    app.globalData.token = this.data.token
    app.globalData.userInfo = userInfo
    wx.setStorageSync('githubToken', this.data.token)
    wx.setStorageSync('githubUser',userInfo)
    wx.navigateBack()
  }
})