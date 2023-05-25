const { request } = require('../utils/api')
const app = getApp()
const token = app.globalData.token

class NotificationService {
  async getNoticationList({ all = true } = {}) {
    const res = await request({
      path: `/notifications?all=${all}`,
      header: {
        'Authorization': `Bearer ${token}`
      }
    })
    return res
  }
}

module.exports = new NotificationService()