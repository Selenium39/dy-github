const repoService = require('../../services/repo')
const app = getApp()

Page({
  data: {
    token: null,
    userInfo:{},
    readme:null
  },
  gotoLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  onShow: async function () {
    this.getTabBar().init();
    if (app.globalData.token) {
      const token = app.globalData.token
      this.setData({
        token,
        userInfo:app.globalData.userInfo
      })
    }
  },
  onLoad: function () {

  }
})