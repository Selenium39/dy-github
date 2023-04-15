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
  onShow: function () {
    this.getTabBar().init();
    if (app.globalData.token) {
      this.setData({
        token: app.globalData.token,
        userInfo:app.globalData.userInfo
      })
    }
  },
  onLoad: function () {

  }
})