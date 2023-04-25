const app = getApp()
const trendingService = require('../../services/trending')

Page({
  data: {
    sinces: [{
        text: '今天',
        value: 'daily'
      },
      {
        text: '本周',
        value: 'weekly'
      },
      {
        text: '本月',
        value: 'monthly'
      },
    ],
    since: 'daily',
    languages: [],
    language: '',
    spoken_languages: [],
    spoken_language: '',
    repos:[]
  },
  async getRepos(){
     const repos = await trendingService.getTrendingRepo(this.data)
     this.setData({
       repos
     })
  },
  async onLoad() {
    const [languages, spoken_languages] = await Promise.all([trendingService.getLanguages(), trendingService.getSpokenLanguage(),this.getRepos()])
    this.setData({
      languages: languages.map(lang => ({
        text: lang.title,
        value: lang.name
      })),
      spoken_languages: spoken_languages.map(lang => ({
        text: lang.title,
        value: lang.name
      })),
    })
  }
})