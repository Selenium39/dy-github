const app = getApp()

const repoService = require('../../services/repo')

Page({
  data: {
    repoList: [],
    page: 1,
    owner: null,
    isMe:null
  },
  async lower() {
    const page = this.data.page + 1;
    const repoList = await repoService.getRepoList({
      owner: this.data.owner,
      page,
      isMe
    })
    this.setData({
      page,
      repoList: this.data.repoList.concat(repoList)
    })
  },
  async showRepo(event) {
    const { repo, owner } = event.target.dataset
    const repoInfo = await repoService.getRepo({ repo, owner })
    const data = {
      repoInfo
    }
    wx.navigateTo({
      url: `/pages/repo/repo?data=${(encodeURIComponent(JSON.stringify(data)))}`,
    })
  },
  async onLoad(options) {
    let { owner,isMe} = JSON.parse(decodeURIComponent(options.data))
    const repoList = await repoService.getRepoList({ owner,isMe})
    this.setData({ repoList, owner,isMe })
  }
})