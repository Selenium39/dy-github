const searchService = require('../../services/search')

Page({
  data: {
    repoList: [],
  },
  async searchRepo(searchValue){
    const params = {
      q: searchValue,
      sort: 'stars',
      order: 'desc'
    }
    const { items: repoList } = await searchService.search(params)
    this.setData({repoList})
  },
  async onLoad(options) {
    let { searchValue} = JSON.parse(decodeURIComponent(options.data))
    await this.searchRepo(searchValue)
  }
})