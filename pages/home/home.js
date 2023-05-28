// index.js
const app = getApp()
Page({
  data: {
    active: 'home',
    token: null,
    searchValue:'',
    userInfo:{},
  },
  gotoLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  showRepoList(){
    const data = {
      isMe:true,
      owner:this.data.userInfo.login
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
  onSearch(){
    if(this.data.searchValue){
      const data = {
        searchValue:this.data.searchValue
      }
      wx.navigateTo({
        url: `/pages/search/search?data=${encodeURIComponent(JSON.stringify(data))}`,
      })
    }
  },
  searchChange(event){
    this.setData({
      searchValue: event.detail,
    });
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    wx.switchTab({
      url: '/pages/explore/explore',
    })
  },
  onShow: function () {
    this.getTabBar().init();
    if (app.globalData.token) {
      const token = app.globalData.token
      this.setData({
        token,
        userInfo:app.globalData.userInfo
      })
    }
  },
});
