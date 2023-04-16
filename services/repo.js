const {request} = require('../utils/api')

class RepoService{
  async getRepoReadme({owner,repo,token}){
    const res = await request({
      path:`/repos/${owner}/${repo}/readme`,
      header:{
        'Authorization': `Bearer ${token}`
      }
    })
    return res
 }
}

module.exports = new RepoService()