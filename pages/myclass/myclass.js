// pages/goods1/goods1.js
// index/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    myclass:{
      class:"c++sssss算法竞赛",
      images:"static/3.jpg",
      descriptionall:"随着互联网的新兴，计算机及其技术越来越受大众所熟知，也有越来越多的行业和岗位需要计算机技术，其中就有需要编程技术的工作。为了区分和提升人们的编程能力，培养杰出程序员，算法竞赛应运而生。它是专门考察编程技术的一项专门竞赛。有：面向青少年（小、中、高）的竞赛CSP和NOI，面向大学生的竞赛ACM-ICPC和CCPC。时至今日，参加算法竞赛依旧是升学、找工作的捷径和对个人能力的认可",
      keshi:"20",
      time:"2023.6.1",
      RC:"100",
      imagelist:[
        {urls:"/static/c++.jpg"},
        {urls:"/static/indexbj.jpg"},
        {urls:"/static/logins.jpg"}
      ],
      qdlist:[
        {
          id:"100",
          times:"2023.08.05 17:04"
        },
        {
          id:"100",
          times:"2023.8.5"
        },
        {
          id:"100",
          times:"2023.8.5"
        }
      ],
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
    console.log(ids)
    getApp().helper({
      url: getApp().globalData.urlpath + '/myclass',
      data:{
        id:ids,
        ID:"wx"
      },
      success(res){
        console.log(res)
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
