const app = getApp()

Page({
  data:{
     token : null,
  },
  gotoLogin(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  onShow: function () {
    this.getTabBar().init();
  },
  onLoad: function(){
    this.setData({
      token: app.globalData.token
    })
  }
})