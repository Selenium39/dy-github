const app = getApp()

Page({
  data: {
    repoInfo:null,
  },
  viewCode(){
    const data = {
      owner:this.data.repoInfo.author||this.data.repoInfo.owner.login,
      repo:this.data.repoInfo.name
    }
    wx.navigateTo({
      url: `/pages/repo-detail/repo-detail?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  },
  async onLoad(options){
    let {repoInfo} = JSON.parse(decodeURIComponent(options.data))
    this.setData({repoInfo})
  }
})