Component({
  properties:{
    repo:Object
  },
  methods:{
    showRepo(){
      const data = {
        repoInfo:this.properties.repo
      }
      wx.navigateTo({
        url: `/pages/repo/repo?data=${(encodeURIComponent(JSON.stringify(data)))}`,
      })
    }
  }
})