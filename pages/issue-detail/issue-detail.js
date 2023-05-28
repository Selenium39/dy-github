const issueService = require('../../services/issue')
const app = getApp()

Page({
  data:{
    issueBody:{}
  },
  async onLoad(options){
    let {owner,repo,number} = JSON.parse(decodeURIComponent(options.data))
    const {body} = await issueService.getIssue({owner,repo,number})
    const issueBody = app.towxml(body, 'markdown')
    this.setData({
      issueBody
    })
  }
})