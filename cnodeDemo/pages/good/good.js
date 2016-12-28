//index.js
//获取应用实例
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    infos:["1"]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.request({
      url: 'https://cnodejs.org/api/v1/topics?tab=good',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: {'content-type': 'application/json'}, // 设置请求的 header
      success: function(res){
        // success
        console.log("--success---")
        console.log(res)
        that.setData({infos:res.data.data})
      },
      fail: function() {
        console.log("--fail---")
        // fail
      },
      complete: function() {
        // complete
      }
    })
    
  },
  click_SeeInfo:function(res){
     console.log(res)
     console.log(res.currentTarget.id)
   wx.navigateTo({
     url: '../info/info?id='+res.currentTarget.id,
     success: function(res){
       // success
       console.log("suc")
     },
     fail: function() {
       // fail
       console.log("fail")
     },
     complete: function() {
       // complete
     }
   })
  }
})
