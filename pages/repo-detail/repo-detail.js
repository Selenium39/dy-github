const repoService = require('../../services/repo')
const app = getApp()

Page({
  data: {
    path: null,
    files: []
  },
  async onLoad(options) {
    const { owner, repo, path } = JSON.parse(decodeURIComponent(options.data))
    const res = await repoService.getRepoContent({
      owner,
      repo
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
    this.setData({ path, files, })
  }
})