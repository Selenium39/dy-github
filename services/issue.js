const { request } = require('../utils/api')
const app = getApp()

class IssueService {
  async getIssueList({ owner, repo, state = 'all' }) {
    const params = {
      path: `/repos/${owner}/${repo}/issues?state=${state}`,
    }
    if (app.globalData.token) {
      Object.assign(params, {
        header: {
          'Authorization': `Bearer ${app.globalData.token}`
        }
      })
    }
    const res = await request(params)
    return res
  }

  async getIssue({owner,repo,number}){
    const params = {
      path: `/repos/${owner}/${repo}/issues/${number}`,
    }
    if (app.globalData.token) {
      Object.assign(params, {
        header: {
          'Authorization': `Bearer ${app.globalData.token}`
        }
      })
    }
    const res = await request(params)
    return res
  }
}

module.exports = new IssueService()