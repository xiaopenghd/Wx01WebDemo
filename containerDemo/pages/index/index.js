//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    scrollNum:0,
    intoview:"",
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
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  scrollToUp: function(event){
    console.log("scrollToUp");
    console.log(event);
  },
  scrollToLower:function(event){
     console.log("scrollToLower");
    console.log(event);
  },
   scroll:function(event){
    //  console.log("scroll");
    // console.log(event);
  },
  btnclick:function(event){
     this.setData({intoview:"yellow"});
    // this.setData({scrollNum:this.data.scrollNum+10});
  }
})
