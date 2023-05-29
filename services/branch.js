const { request } = require('../utils/api')
const app = getApp()

class BranchService {
  async getBranchList({ owner, repo }) {
    const params = {
      path: `/repos/${owner}/${repo}/branches`,
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

module.exports = new BranchService()