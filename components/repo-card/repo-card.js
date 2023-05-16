Component({
  properties:{
    repo:Object
  },
  methods:{
    showRepo(){
      wx.navigateTo({
        url: '/pages/repo/repo',
      })
    }
  }
})