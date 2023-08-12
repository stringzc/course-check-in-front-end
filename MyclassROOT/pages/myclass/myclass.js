// pages/goods1/goods1.js
// index/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    myclass:{
      class:"",
      images:"static/3.jpg",
      descriptionall:"",
      keshi:"",
      time:"",
      RC:"",
      imagelist:[],
      qdlist:[],
      ret:false
    },
    pwdAnimationData:{},
    hidden: false

  },

  qd:function(){
    this.animation.bottom("0rpx").height("100%").step();
    this.setData({
      pwdAnimationData: this.animation.export(),
      hidden: true
    })
  },
  cancel: function(e) {
    this.animation.bottom("-100%").height("0rpx").step();
    this.setData({
      pwdAnimationData: this.animation.export(),
      hidden: false,
    })
  },
  returns: function(e){
    wx.switchTab({
      url: '/pages/classlist/classlist',
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ids = options.key
    var that = this
    getApp().helper({
      url: getApp().globalData.urlpath + '/myclass',
      data:{
        id:ids,
        ID:"wx"
      },
      success(res){
        that.setData({
           myclass: res.data
        });
      },
      fail(res){
        wx.showToast({
          title: '连接服务器失败',
          image: '/static/error.png',
          duration: 1500
        });
      }
    });
    this.animation = wx.createAnimation({
      duration: 400, // 整个动画过程花费的时间，单位为毫秒
      timingFunction: "ease", // 动画的类型
      delay: 0 // 动画延迟参数
    });
    this.setData({
      pwdAnimationData: this.animation.export()
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})
