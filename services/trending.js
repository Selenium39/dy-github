const {request} = require('../utils/api')
const languages = require('../datas/languages.json')
const spoken_language = require('../datas/spoken-languages.json')
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
    // const res = await request({
    //   url:TRENDING_BASE_URL,
    //   path:'/languages',
    // })
    // return res
    return languages
   }

   async getSpokenLanguage(){
    // const res = await request({
    //   url:TRENDING_BASE_URL,
    //   path:'/spoken_languages',
    // })
    // return res
    return spoken_language
   }


}

module.exports = new TrendingService()