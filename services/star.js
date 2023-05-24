const {request} = require('../utils/api')

class StarService{
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

module.exports = new StarService()