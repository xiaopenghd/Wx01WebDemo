var app = getApp()
Page(

    {
  data:{
   userName:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

    console.log("userinfo load")
     console.log(app.data)
    console.log(app.data.userInfo)
    if(app.data.userInfo == null)
    {
         console.log("userinfo load1")
        wx.redirectTo({
          url: '../login/login'
        })
    }else
    {
         console.log("userinfo load2")
     this.setData({userName:app.data.userInfo.username})

    }
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    console.log("userinfo show")
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  }
})