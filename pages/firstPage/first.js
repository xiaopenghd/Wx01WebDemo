Page({
  data:{
    test:"hello word",
    btn1:"提交",
    isA:false,

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
  btnClik:function(){
      console.log("按钮被点击了")
    //  this.setData({test:"new word!1"})

     var isshow = this.data.isA
     console.log("isshow:"+isshow)
     this.setData({isA:!isshow})
  } 
})