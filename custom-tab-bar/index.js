// index.js
Page({
  data: {
    active: 0,
    list:[
      {
        icon:'wap-home-o',
        text:'主页',
        url:'/pages/home/home'
      },
      {
        icon:'envelop-o',
        text:'通知',
        url:'/pages/notifications/notifications'
      },
      {
        icon:'browsing-history-o',
        text:'探索',
        url:'/pages/explore/explore'
      },
      {
        icon:'user-o',
        text:'个人资料',
        url:'/pages/profile/profile'
      }
    ]
  },
  onChange(event) {
    const active = event.detail 
    wx.switchTab({
      url: this.data.list[active].url,
    })
  },
  init() {
    const page = getCurrentPages().pop();
    this.setData({
   　  active: this.data.list.findIndex(item => item.url === `/${page.route}`)
    });
   }
});
