const {request} = require('../utils/api')

class RepoService{
   async getReadme({owner,repo}){
      const res = await request({
        path:`/repos/${owner}/${repo}/readme`,
        header:{
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