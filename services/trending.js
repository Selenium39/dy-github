const {request} = require('../utils/api')
const TRENDING_BASE_URL='https://mihoyonb.com/gitterapp'


class TrendingService{
   async getTrendingRepo({language,since='daily',spoken_language}){
      const res = await request({
        url:TRENDING_BASE_URL,
        path:'/repositories',
        data:{
          language,
          since,
          spoken_language
        }
      })
      return res
   }
}

module.exports = new TrendingService()