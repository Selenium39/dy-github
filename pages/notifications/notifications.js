// index.js
const notificationService = require('../../services/notification')
const app = getApp()
Page({
  data: {
    token: null,
    notificationList: []
  },
  gotoLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  async getNotificationList() {
    const params = {
      token: app.globalData.token
    }
    const notificationList = await notificationService.getNoticationList(params)
    console.log(notificationList)
    this.setData({notificationList})
  },
  onShow: async function () {
    this.getTabBar().init();
    if (app.globalData.token) {
      const token = app.globalData.token
      this.setData({
        token,
      })
    }
  },
  onLoad: async function () {
    if (app.globalData.token) {
      this.getNotificationList()
    }
  }
});