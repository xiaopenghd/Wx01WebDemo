var app = getApp()
Page({
  data:
  {
      userName:null,
      userPwd:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },
  bindInputUserName:function(event){
   console.log(event)
   this.setData({userName:event.detail.value})
  },
   bindInputUserPwd:function(event){
     console.log(event)
     this.setData({userPwd:event.detail.value})
  },
  loginClick:function(){
    app.data.userInfo = {username:this.data.userName,password:this.data.userPwd}
     console.log(app)
   console.log("test2"+app.data.userInfo)
    wx.redirectTo({
          url: '../userInfo/userInfo'
        })
   
  }
})