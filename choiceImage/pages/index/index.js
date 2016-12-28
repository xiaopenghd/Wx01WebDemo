//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    avatarUrl:null
  },
  //事件处理函数
  bindViewTap: function() {

    var that =this;
  //  wx.chooseImage({
  //    count: 9, // 最多可以选择的图片张数，默认9
  //    sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
  //    sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
  //    success: function(res){
  //      var filtPath=res.tempFilePaths
  //      that.setData({avatarUrl:filtPath[0]})
  //      console.log(filtPath[0])
  //       console.log(res)
  //    },
  //    fail: function() {
  //      // fail
  //    },
  //    complete: function() {
  //      // complete
  //    }
  //  })

  // wx.uploadFile({
  //   url: 'http://pic.qiantucdn.com/58pic/15/39/96/06K58PICv6A_1024.jpg',
  //   filePath:'filePath',
  //   name:'name',
  //   // header: {}, // 设置请求的 header
  //   // formData: {}, // HTTP 请求中其他额外的 form data
  //   success: function(res){
  //     that.setData({avatarUrl:res.tempFilePath});
  //    console.log(res);
  //       console.log(avatarUrl);
  //   },
  //   fail: function() {
  //     // fail
  //   },
  //   complete: function() {
  //     // complete
  //   }
  // })

  wx.downloadFile({
    url: "http://pic.qiantucdn.com/58pic/15/39/96/06K58PICv6A_1024.jpg",
    // type: 'image', // 下载资源的类型，用于客户端识别处理，有效值：image/audio/video
    // header: {}, // 设置请求的 header
    success: function(res){
      that.setData({avatarUrl:res.tempFilePath});
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
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
  }
})
