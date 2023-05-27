const { request } = require('../utils/api')
const app = getApp()
const token = app.globalData.token

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
        if (token) {
            Object.assign(params, {
                header: {
                    'Authorization': 'Bearer ' + token,
                }
            })
        }
        const res = await request(params)
        return res
    }
}

module.exports = new OrganService()