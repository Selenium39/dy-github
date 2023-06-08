Page({
  data:{
    searchValue:''
  },
  onShow: function () {
    this.getTabBar().init();
  },
  onSearch(){
    if(this.data.searchValue){
      const data = {
        searchValue:this.data.searchValue
      }
      wx.navigateTo({
        url: `/pages/search/search?data=${encodeURIComponent(JSON.stringify(data))}`,
      })
    }
  },
  searchChange(event){
    this.setData({
      searchValue: event.detail,
    });
  },
  onShareAppMessage: function () {
    return {
     title: 'Github Best',
     desc: '这将会是最好的GitHub微信小程序客户端',
     path: '/pages/explore/explore'
    }
   },  
})