const commitService = require('../../services/commit')
const app = getApp()

Page({
  data: {
    commitList: [],
    repo: null,
    owner: null
  },
  async showCommit(event) {
    // todo 后续显示具体的commit
  },
  async onLoad(options) {
    const { owner, repo } = JSON.parse(decodeURIComponent(options.data))
    const res = await commitService.getCommitList({
      owner,
      repo,
    })
    this.setData({
      commitList: res,
      owner,
      repo
    })
  }
})