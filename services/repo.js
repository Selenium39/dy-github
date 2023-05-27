const { request } = require('../utils/api')

const app = getApp()

class RepoService {
  async getReadme({ owner, repo }) {
    const params = {
      path: `/repos/${owner}/${repo}/readme`,
      header: {
        'accept': 'application/vnd.github.html'
      }
    }
    if (app.globalData.token) {
      Object.assign(params.header, { 'Authorization': 'Bearer ' + app.globalData.token, })
    }
    const res = await request(params)
    return res
  }

  async getRepo({ owner, repo }) {
    const params = {
      path: `/repos/${owner}/${repo}`,
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

  async getRepoList({ owner, isMe = false, sort = 'pushed', page = 1
  }) {
    const params = {
      path: `/users/${owner}/repos?sort=${sort}&page=${page}`,
    }
    if (isMe) {
      Object.assign(params, {
        path: `/user/repos?sort=${sort}&page=${page}`,
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

  async getRepoContent({
    owner,
    repo,
    path
  }) {
    {
      const params = {
        path: `/repos/${owner}/${repo}/contents`,
      }
      if (path) {
        params.path += `/${path}`
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
}

module.exports = new RepoService()