const repoService = require(('../../services/repo'))

const app = getApp()

Page({
  data: {
    token: null,
    userInfo:{}
  },
  gotoLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  onShow: async function () {
    const {token} = app.globalData
    this.getTabBar().init();
    if (token) {
      this.setData({
        token,
        userInfo:app.globalData.userInfo
      })
      // 获取README
      const {login:owner} = app.globalData.userInfo
      const res = await repoService.getRepoReadme({owner,repo:owner,token})
      console.log(res)
    }
  },
  onLoad: function () {

  }
})