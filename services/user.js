const {request} = require('../utils/api')

class UserService{
   async getAuthenticatedUser(token){
      const res = await request({
        path:'/user',
        header:{
          'Authorization': 'Bearer ' + token
        }
      })
      return res
   }
}

module.exports = new UserService()