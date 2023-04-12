// index.js
Page({
  data: {
    active: 0,
    list:[
      {
        icon:'wap-home-o',
        text:'Home',
        url:'/pages/home/home'
      },
      {
        icon:'envelop-o',
        text:'Notifications',
        url:'/pages/notifications/notifications'
      },
      {
        icon:'browsing-history-o',
        text:'Explore',
        url:'/pages/explore/explore'
      },
      {
        icon:'user-o',
        text:'Profile',
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
