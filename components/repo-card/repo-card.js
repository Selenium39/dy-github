Component({
  properties:{
    repo:Object
  },
  methods:{
    showRepo(){
      const repo = this.properties.repo
      const data = {
        owner:repo.author||repo.owner.login,
        repo:repo.name
      }
      wx.navigateTo({
        url: `/pages/repo/repo?data=${(encodeURIComponent(JSON.stringify(data)))}`,
      })
    }
  }
})