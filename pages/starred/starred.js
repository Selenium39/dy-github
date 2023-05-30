const app = getApp()

const repoService = require('../../services/repo')
const starService = require('../../services/star')

Page({
  data: {
    repoList: [],
    isMe: null,
    owner: null,
    page: 1,
    isLoading:true
  },
  async lower() {
    this.setData({isLoading:true})
    const {
      owner,
      isMe
    } = this.data
    const page = this.data.page + 1;
    const repoList = await starService.getStarredList({
      owner,
      isMe,
      page
    })
    this.setData({
      page,
      repoList: this.data.repoList.concat(repoList),
      isLoading:false
    })
  },
  async showRepo(event) {
    const {
      repo,
      owner
    } = event.target.dataset
    const data = {
      repo,
      owner,
    }
    wx.navigateTo({
      url: `/pages/repo/repo?data=${(encodeURIComponent(JSON.stringify(data)))}`,
    })
  },
  async onLoad(options) {
    let {
      owner,
      isMe
    } = JSON.parse(decodeURIComponent(options.data))
    const repoList = await starService.getStarredList({
      owner,
      isMe
    })
    this.setData({
      repoList,
      isMe,
      owner,
      isLoading:false
    })
  }
})