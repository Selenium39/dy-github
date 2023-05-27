const { request } = require('../utils/api')
const app = getApp()

class StarService {
  async getStarredList({ isMe = false, owner, page = 1 }) {
    const params = {
      path: `/users/${owner}/starred`,
    }
    if (isMe) {
      Object.assign(params, {
        path: `/user/starred?page=${page}`,
      })
    }
    if (app.globalData.token) {
      Object.assign(params, {
        header: {
          'Authorization': 'Bearer ' + app.globalData.token,
        }
      })
    }
    const res = await request(params)
    return res
  }
}

module.exports = new StarService()