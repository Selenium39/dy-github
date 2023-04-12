// index.js
Page({
  data: {
    active: 'home',
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    wx.switchTab({
      url: '/pages/explore/explore',
    })
  },
  onShow: function () {
    this.getTabBar().init();
  },
});
