const {request} = require('../utils/api')

class StarService{
    async getStarredList({token,owner,page=1}){
        const params = {
          path: `/users/${owner}/starred`
        }
        if(token){
          Object.assign(params,{
            path:`/user/starred?page=${page}`,
            header: {
              'Authorization': 'Bearer ' + token,
            }
          })
        }
        const res = await request(params)
        return res
      }
}

module.exports = new StarService()