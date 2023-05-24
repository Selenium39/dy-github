const app = getApp()
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
    repos: []
  },
  async getRepos() {
    const repos = await trendingService.getTrendingRepo(this.data)
    this.setData({
      repos
    })
  },
  changeSince(value) {
    const {
      detail: since
    } = value
    this.setData({
      since
    })
    this.getRepos()
  },
  changeLanguage(value) {
    const {
      detail: language
    } = value
    this.setData({
      language
    })
    this.getRepos()
  },
  changeSpokenLanguage(value) {
    const {
      detail: spoken_language
    } = value
    this.setData({
      spoken_language
    })
    this.getRepos()
  },
  async onLoad() {
    this.setData({
      languages,
      spoken_languages
    })
    await this.getRepos()
  }
})