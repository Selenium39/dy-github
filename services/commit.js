const { request } = require('../utils/api')
const app = getApp()

class CommitService {
  async getCommitList({ owner, repo }) {
    const params = {
      path: `/repos/${owner}/${repo}/commits`,
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

module.exports = new CommitService()