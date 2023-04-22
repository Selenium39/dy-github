// app.js
App({
  globalData: {
    token:null,
    userInfo:{}
  },
  onLaunch(){
    const token = wx.getStorageSync('githubToken')
    const userInfo = wx.getStorageSync('githubUser')
    this.globalData.token = token
    this.globalData.userInfo = userInfo
  },
  towxml:require('/towxml/index')
})
