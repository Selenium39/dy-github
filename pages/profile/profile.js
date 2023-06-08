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
      isMe:true
    }
    wx.navigateTo({
      url: `/pages/starred/starred?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  },
  showOrganList(){
    const data = {
      isMe:true
    }
    wx.navigateTo({
      url: `/pages/organs/organs?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  },
  onShow: async function () {
    this.getTabBar().init();
    if (app.globalData.token) {
      this.setData({
        token:app.globalData.token,
        userInfo:app.globalData.userInfo
      })
    }
  },
  onLoad: function () {

  },
  onShareAppMessage: function () {
    return {
     title: 'Github Best',
     desc: '这将会是最好的GitHub微信小程序客户端',
     path: '/pages/explore/explore'
    }
   },  
})