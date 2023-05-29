const app = getApp()
const branchService = require('../../services/branch')

Page({
  data: {
    repoInfo: null,
    branches: [],
    currentBranch: null,
    showBranches: false
  },
  viewCode() {
    const data = {
      owner: this.data.repoInfo.author || this.data.repoInfo.owner.login,
      repo: this.data.repoInfo.name
    }
    wx.navigateTo({
      url: `/pages/repo-detail/repo-detail?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  },
  viewIssue() {
    const data = {
      owner: this.data.repoInfo.author || this.data.repoInfo.owner.login,
      repo: this.data.repoInfo.name
    }
    wx.navigateTo({
      url: `/pages/issue/issue?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  },
  viewPr() {
    const data = {
      owner: this.data.repoInfo.author || this.data.repoInfo.owner.login,
      repo: this.data.repoInfo.name
    }
    wx.navigateTo({
      url: `/pages/pull-request/pull-request?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  },
  viewCommit() {
    const data = {
      owner: this.data.repoInfo.author || this.data.repoInfo.owner.login,
      repo: this.data.repoInfo.name
    }
    wx.navigateTo({
      url: `/pages/commit/commit?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  },
  changeBranch() {
      this.setData({
        showBranches: true
      })
  },
  onCancel(){
    this.setData({
      showBranches: false
    })
  },
  onConfirm(event){
    const { value } = event.detail;
    this.setData({
      showBranches:false,
      currentBranch:value
    })
  },
  async onLoad(options) {
    let { repoInfo } = JSON.parse(decodeURIComponent(options.data))
    this.setData({ repoInfo, currentBranch: repoInfo.default_branch || 'master' })
    const res = await branchService.getBranchList({
      owner: repoInfo.author || repoInfo.owner.login,
      repo: repoInfo.name
    })
    const branches = res.map(item => item.name)
    this.setData({
      branches
    })
  }
})