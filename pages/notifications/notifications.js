// index.js
const notificationService = require('../../services/notification')
const app = getApp()
Page({
  data: {
    token: null,
    notificationList: [],
    isLoading: true
  },
  gotoLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  async getNotificationList() {
    this.setData({ isLoading: true })
    const notificationList = await notificationService.getNoticationList()
    this.setData({ notificationList, isLoading: false })
  },
  onShow: async function () {
    this.getTabBar().init();
    if (app.globalData.token) {
      this.setData({
        token: app.globalData.token
      })
      await this.getNotificationList()
    }
  },
  onLoad: async function () {

  },
  onShareAppMessage: function () {
    return {
     title: 'Github Best',
     desc: '这将会是最好的GitHub微信小程序客户端',
     path: '/pages/explore/explore'
    }
   }, 
});