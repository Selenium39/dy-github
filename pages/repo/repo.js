const app = getApp()

Page({
  data: {
    repo:null,
  },
  async onLoad(options){
    let repo = JSON.parse(decodeURIComponent(options.repo))
    this.setData({repo})
  }
})