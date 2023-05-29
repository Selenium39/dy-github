const trendingService = require('../../services/trending')
const languages = require('../../datas/languages')
const spoken_languages = require('../../datas/spoken-languages')

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
    repos: [],
    isLoading:true
  },
  async getRepos() {
    this.setData({
      isLoading:true
    })
    const repos = await trendingService.getTrendingRepo(this.data)
    this.setData({ repos ,isLoading:false})
  },
  async changeSince(value) {
    const { detail: since } = value
    this.setData({ since })
    await this.getRepos()
  },
  async changeLanguage(value) {
    const { detail: language } = value
    this.setData({ language })
    await this.getRepos()
  },
  async changeSpokenLanguage(value) {
    const { detail: spoken_language } = value
    this.setData({ spoken_language })
    await this.getRepos()
  },
  async onLoad() {
    this.setData({ languages, spoken_languages })
    await this.getRepos()
  }
})