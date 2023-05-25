const app = getApp()

Page({
  data: {
    repo:null,
    token:null,
  },
  viewCode(){
    const data = {
      token:this.data.token,
      owner:this.data.repo.author||this.data.repo.owner.login,
      repo:this.data.repo.name
    }
    wx.navigateTo({
      url: `/pages/repo-detail/repo-detail?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  },
  async onLoad(options){
    let repo = JSON.parse(decodeURIComponent(options.repo))
    this.setData({repo})
  }
})