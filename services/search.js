const { request } = require('../utils/api')

class SearchService {
    async search({ q, sort, order = desc, token, per_page = 30 }) {
        const params = {
            path: `/search/repositories?q=${q}&sort=${sort}&order=${order}&per_page=${per_page}`
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

module.exports = new SearchService()