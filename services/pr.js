const { request } = require('../utils/api')
const app = getApp()

class PrService {
  async getPrList({ owner, repo, state = 'all' }) {
    const params = {
      path: `/repos/${owner}/${repo}/pulls?state=${state}`,
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

module.exports = new PrService()