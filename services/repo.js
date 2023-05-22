const {
  request
} = require('../utils/api')

class RepoService {
  async getReadme({
    owner,
    repo
  }) {
    const res = await request({
      path: `/repos/${owner}/${repo}/readme`,
      header: {
        'accept': 'application/vnd.github.html'
      }
    })
    return res
  }

  async getRepo({
    token,
    owner,
    repo
  }) {
    const params = {
      path: `/repos/${owner}/${repo}`,
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

  async getRepoList({
    owner,
    token
  }) {
    const params = {
      path: `/users/${owner}/repos`
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

  async getStarredList({token,owner}){
    const params = {
      path: `/users/${owner}/starred`
    }
    if(token){
      Object.assign(params,{
        path:'/user/starred',
        header: {
          'Authorization': 'Bearer ' + token,
        }
      })
    }
    const res = await request(params)
    return res
  }
}

module.exports = new RepoService()