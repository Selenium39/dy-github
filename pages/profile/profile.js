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
  showRepoList(){
    const data = {
      token:this.data.token,
      owner:this.data.userInfo.login
    }
    wx.navigateTo({
      url: `/pages/repo-list/repo-list?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  },
  showStarredList(){
    const data = {
      token:this.data.token,
    }
    wx.navigateTo({
      url: `/pages/starred/starred?data=${encodeURIComponent(JSON.stringify(data))}`,
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