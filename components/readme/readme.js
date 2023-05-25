const repoService = require('../../services/repo')
const app = getApp()

Component({
  properties: {
    owner: String,
    repo: String,
  },
  data: {
    readme: null
  },
  observers: {
    'owner,repo': async function (owner, repo) {
      if (owner && repo) {
        await this.getReadme()
      }
    }
  },
  methods: {
    async getReadme() {
      const readmeHtml = await repoService.getReadme(this.properties)
      if (!readmeHtml.message) {
        const result = app.towxml(readmeHtml, 'html')
        this.setData({
          readme: result
        })
      }
    },
  },
})