const repoService = require('../../services/repo')

Page({
  data: {
    owner: null,
    repo: null,
    files: [],
    branch:null
  },
  async showDetail({ owner, repo, path,branch }) {
    const res = await repoService.getRepoContent({
      owner,
      repo,
      path,
      branch
    })
    const files = res
      .map((item) => {
        return {
          name: item.name,
          path: item.path,
          type: item.type,
        }
      }).sort((item1, item2) => {
        if (item1.type === item2.type) {
          return item1.name.localeCompare(item2.name);
        } else if (item1.type === 'dir') {
          return -1;
        } else {
          return 1;
        }
      });
    this.setData({ path, files, owner, repo,branch })
  },
  async showFile(event) {
    const { path, type } = event.target.dataset
    const data = {
      path,
      owner: this.data.owner,
      repo: this.data.repo,
      branch:this.data.branch
    }
    if (type === 'file') {
      wx.navigateTo({
        url: `/pages/repo-code/repo-code?data=${(encodeURIComponent(JSON.stringify(data)))}`,
      })
    } else {
      wx.navigateTo({
        url: `/pages/repo-detail/repo-detail?data=${(encodeURIComponent(JSON.stringify(data)))}`,
      })
    }
  },
  async onLoad(options) {
    const { owner, repo, path,branch } = JSON.parse(decodeURIComponent(options.data))
    await this.showDetail({ owner, repo, path ,branch})
  }
})