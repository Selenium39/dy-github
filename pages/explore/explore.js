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
})