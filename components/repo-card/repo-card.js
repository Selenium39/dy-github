Component({
  properties:{
    repo:Object
  },
  methods:{
    showRepo(){
      wx.navigateTo({
        url: `/pages/repo/repo?repo=${(encodeURIComponent(JSON.stringify(this.properties.repo)))}`,
      })
    }
  }
})