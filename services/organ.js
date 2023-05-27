const { request } = require('../utils/api')
const app = getApp()

class OrganService {
    async getOrganList({ owner, isMe = false }) {
        const params = {
            path: `/users/${owner}/orgs`,
        }
        if (isMe) {
            Object.assign(params, {
                path: '/user/orgs',
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

module.exports = new OrganService()