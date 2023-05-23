const app = getApp()
const repoService = require('../../services/repo')

Page({
  data: {
    repoList:[],
    taoken:null
  },
  async showRepo(event){
    const {repo,owner} = event.target.dataset
    const repoInfo = await repoService.getRepo({repo,owner,token:this.data.token})
    wx.navigateTo({
      url: `/pages/repo/repo?repo=${(encodeURIComponent(JSON.stringify(repoInfo)))}`,
    })
  },
  async getRepos(){
    // stars count desc last week
    const date = new Date()
    date.setDate(date.getDate() - 7)
    const formattedDate = date.toISOString().slice(0, 10);
    const params = {
      q:`stars:>0+created:>=${formattedDate}`,
      sort:'stars',
      order:'desc'
    }
     const {items:repoList} = await repoService.search(params)
     this.setData({
      repoList
     })
  },
  async onLoad() {
    await this.getRepos()
  }
})