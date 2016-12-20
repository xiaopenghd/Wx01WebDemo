Page({
  data:{
    expressNum:null,
    expressInfo:null,
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
  btnClick:function(){
     console.log(this.data.expressNum)
     var thispage =this;
    this.getExpressInfo(this.data.expressNum,function(data){
      thispage.setData({expressInfo:data})
       console.log(data)
    });
  },
  getExpressInfo:function(nu,cb){
      wx.request({
        url: 'http://apis.baidu.com/kuaidicom/express_api/express_api?muti=0&order=desc&nu='+nu, //仅为示例，并非真实的接口地址
        data: {
            x: '' ,
            y: ''
        },
        header: {
            'apikey': 'a79124c4594c2e5a0799a39ea8f64c87'
        },
        success: function(res) {
            //console.log(res.data)
            cb(res.data)
        }
})
  },
  input:function(e){
    this.setData({expressNum:e.detail.value})
    // console.log(e)
  }
})