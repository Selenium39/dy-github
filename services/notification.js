const {request} = require('../utils/api')

class NotificationService{
   async getNoticationList({token,all=true}){
      const res = await request({
        path:`/notifications?all=${all}`,
        header:{
          'Authorization': `Bearer ${token}`
        }
      })
      return res
   }
}

module.exports = new NotificationService()