Page({
  data:{
    info:null
  },
  onLoad:function(options){
      console.log(options)
      var that = this
    // 生命周期函数--监听页面加载
      wx.request({
       url: 'https://cnodejs.org/api/v1/topic/'+options.id,
       data: {},
       method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {'content-type': 'application/json'}, // 设置请求的 header
       success: function(res){
         console.log(res)
         that.setData({info:res.data.data})
       },
       fail: function() {
         // fail
       },
       complete: function() {
         // complete
       }
     })
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})