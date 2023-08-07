// pages/classlist/classlist.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    classlist:[],
    fails:"1"
  },
  
  clickme: function (e){
    var id = e.currentTarget.dataset.id
    console.log(e)
    wx.navigateTo({
      url: '/pages/myclass/myclass?key='+ id,
    })
  },
  
   onLoad: function (options) {
    this.data.username = getApp().globalData.username
    let username = this.data.username
    let that = this
    if(username.length == 0)
    {
      wx.showModal({
        title: '提示',
        content: '请先登录',
      })
      that.setData({
        fails:"1"
      })
    }
    else{
    getApp().helper({
      url: getApp().globalData.urlpath + '/getclass',
      data: {
        username: username
      },
      success(res) {
        console.log(res);
        that.setData({
          classlist:res.data.classlist,
          fails: res.data.res
        })
      },
      fail(res) {
        wx.showToast({
        title: '连接服务器失败',
        image: '/static/error.png',
        duration: 1500
      });
    }
  })}  
  }

})