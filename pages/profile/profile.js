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
      owner:this.data.userInfo.login,
      isMe:true
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
  showOrganList(){
    const data = {
      token:this.data.token,
    }
    wx.navigateTo({
      url: `/pages/organs/organs?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  },
  onShow: async function () {
    this.getTabBar().init();
  },
  onLoad: function () {
    if (app.globalData.token) {
      this.setData({
        token:app.globalData.token,
        userInfo:app.globalData.userInfo
      })
    }
  }
})