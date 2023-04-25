const {request} = require('../utils/api')
const TRENDING_BASE_URL='https://api.gitterapp.com'

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

   async getLanguages(){
    const res = await request({
      url:TRENDING_BASE_URL,
      path:'/languages',
    })
    return res
   }

   async getSpokenLanguage(){
    const res = await request({
      url:TRENDING_BASE_URL,
      path:'/spoken_languages',
    })
    return res
   }


}

module.exports = new TrendingService()