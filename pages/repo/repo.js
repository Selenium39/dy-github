const app = getApp()
const branchService = require('../../services/branch')
const repoService = require('../../services/repo')

Page({
  data: {
    repoInfo: null,
    branches: [],
    currentBranch: null,
    showBranches: false,
    owner:null,
    repo:null
  },
  viewCode() {
    const data = {
      owner: this.data.owner,
      repo: this.data.repo,
      branch:this.data.currentBranch
    }
    wx.navigateTo({
      url: `/pages/repo-detail/repo-detail?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  },
  viewIssue() {
    const data = {
      owner: this.data.owner,
      repo: this.data.repo
    }
    wx.navigateTo({
      url: `/pages/issue/issue?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  },
  viewPr() {
    const data = {
      owner: this.data.owner,
      repo: this.data.repo
    }
    wx.navigateTo({
      url: `/pages/pull-request/pull-request?data=${encodeURIComponent(JSON.stringify(data))}`,
    })
  },
  viewCommit() {
    const data = {
      owner: this.data.owner,
      repo: this.data.repo
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
    let { owner,repo } = JSON.parse(decodeURIComponent(options.data))
    const repoInfo = await repoService.getRepo({owner,repo})
    this.setData({ repoInfo, currentBranch: repoInfo.default_branch || 'master' })
    const res = await branchService.getBranchList({
      owner,
      repo
    })
    const branches = res.map(item => item.name)
    this.setData({
      branches,
      owner,
      repo
    })
  }
})