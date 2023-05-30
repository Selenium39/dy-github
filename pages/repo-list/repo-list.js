const app = getApp()

const repoService = require('../../services/repo')

Page({
  data: {
    repoList: [],
    page: 1,
    owner: null,
    isMe:null,
    isLoading:true
  },
  async lower() {
    this.setData({isLoading:true})
    const page = this.data.page + 1;
    const repoList = await repoService.getRepoList({
      owner: this.data.owner,
      page,
      isMe:this.data.isMe
    })
    this.setData({
      page,
      repoList: this.data.repoList.concat(repoList),
      isLoading:false
    })
  },
  async showRepo(event) {
    const { repo, owner } = event.target.dataset
    const data = {
      repo,owner
    }
    wx.navigateTo({
      url: `/pages/repo/repo?data=${(encodeURIComponent(JSON.stringify(data)))}`,
    })
  },
  async onLoad(options) {
    let { owner,isMe} = JSON.parse(decodeURIComponent(options.data))
    const repoList = await repoService.getRepoList({ owner,isMe})
    this.setData({ repoList, owner,isMe ,isLoading:false})
  }
})