const { request } = require('../utils/api')
const app = getApp()

class NotificationService {
  async getNoticationList({ all = true } = {}) {
    const res = await request({
      path: `/notifications?all=${all}`,
      header: {
        'Authorization': `Bearer ${app.globalData.token}`
      }
    })
    return res
  }
}

module.exports = new NotificationService()