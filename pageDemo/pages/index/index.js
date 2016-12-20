Page({
  data:{
    
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('---index load---')
  },
  onReady:function(){
    // 页面渲染完成
      console.log('---index onReady---')
  },
  onShow:function(){
    // 页面显示
      console.log('---index onShow---')
  },
  onHide:function(){
    // 页面隐藏
      console.log('---index onHide---')
  },
  onUnload:function(){
    // 页面关闭
      console.log('---index onUnload---')
  },
  itemClick:function(){
    // wx.navigateTo({
    //   url: '../logs/logs'
    
    // })
    wx.redirectTo({
     url: '../logs/logs?id=9'
    })
  }
})