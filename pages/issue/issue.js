const issueService = require('../../services/issue')
const app = getApp()

Page({
  data: {
    issueList: [],
    repo: null,
    owner: null
  },
  async showIssue(event) {
    // todo 后续显示具体的issue
    // const { number } = event.target.dataset
    // const data = {
    //   owner:this.data.owner,
    //   repo:this.data.repo,
    //   number
    // }
    // wx.navigateTo({
    //   url: `/pages/issue-detail/issue-detail?data=${(encodeURIComponent(JSON.stringify(data)))}`,
    // })
  },
  async onLoad(options) {
    const { owner, repo } = JSON.parse(decodeURIComponent(options.data))
    const res = await issueService.getIssueList({
      owner,
      repo,
    })
    this.setData({
      issueList: res,
      owner,
      repo
    })
  }
})