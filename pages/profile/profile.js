const app = getApp()

Page({
  data(){
     token : null
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