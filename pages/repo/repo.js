const app = getApp()

Page({
  data: {
    repo:null,
    readme:null
  },
  async onLoad(options){
    let repo = JSON.parse(decodeURIComponent(options.repo))
    this.setData({repo})
  }
})