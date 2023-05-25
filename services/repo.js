const { request } = require('../utils/api')

const app = getApp()
const token = app.globalData.token

class RepoService {
  async getReadme({ owner, repo }) {
    const params = {
      path: `/repos/${owner}/${repo}/readme`,
      header: {
        'accept': 'application/vnd.github.html'
      }
    }
    if (token) {
      Object.assign(params.header, { 'Authorization': 'Bearer ' + token, })
    }
    const res = await request(params)
    return res
  }

  async getRepo({ owner, repo }) {
    const params = {
      path: `/repos/${owner}/${repo}`,
    }
    if (token) {
      Object.assign(params.header, { 'Authorization': 'Bearer ' + token, })
    }
    const res = await request(params)
    return res
  }

  async getRepoList({ owner, isMe = false, sort = 'pushed', page = 1
  }) {
    const params = {
      path: `/users/${owner}/repos?sort=${sort}&page=${page}`,
      header:{}
    }
    if (isMe) {
      Object.assign(params, {
        path: `/user/repos?sort=${sort}&page=${page}`,
      })
    }
    if (token) {
      Object.assign(params.header, { 'Authorization': 'Bearer ' + token, })
    }
    const res = await request(params)
    return res
  }

  async getRepoContent({
    owner,
    repo,
    path
  }) {
    {
      const params = {
        path: `/repos/${owner}/${repo}/contents`,
        header:{}
      }
      if (path) {
        params.path += path
      }
      if (token) {
        Object.assign(params.header, { 'Authorization': 'Bearer ' + token, })
      }
      const res = await request(params)
      return res
    }
  }
}

module.exports = new RepoService()