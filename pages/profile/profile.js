const repoService = require('../../services/repo')
const app = getApp()

Page({
  data: {
    token: null,
    userInfo:{},
    readme:{}
  },
  gotoLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  onShow: async function () {
    this.getTabBar().init();
    if (app.globalData.token) {
      let {login:owner} = app.globalData.userInfo
      const token = app.globalData.token
      this.setData({
        token,
        userInfo:app.globalData.userInfo
      })
      const readmeHtml = await repoService.getReadme({token,owner,repo:owner})
      let result = app.towxml(readmeHtml,'html')
      this.setData({
        readme:result
      })
    }
  },
  onLoad: function () {

  }
})