const {request} = require('../utils/api')

class RepoService{
   async getReadme({token,owner,repo}){
      const res = await request({
        path:`/repos/${owner}/${repo}/readme`,
        header:{
          'Authorization': 'Bearer ' + token,
          'accept':'application/vnd.github.html'
        }
      })
      return res
   }

   async getRepo({token,owner,repo}){
    const res = await request({
      path:`/repos/${owner}/${repo}`,
      header:{
        'Authorization': 'Bearer ' + token,
      }
    })
    return res
   }
}

module.exports = new RepoService()