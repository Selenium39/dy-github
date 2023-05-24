const { request } = require('../utils/api')

class OrganService {
    async getOrganList({ owner, token }) {
        const params = {
            path: `/users/${owner}/orgs`
        }
        if (token) {
            Object.assign(params, {
                path: '/user/orgs',
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