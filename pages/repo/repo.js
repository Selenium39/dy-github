const app = getApp()
const repoService = require('../../services/repo')

Page({
  data: {
    repo:null
  },
  async onLoad(){
      const res = await repoService.getRepo()
  }
})