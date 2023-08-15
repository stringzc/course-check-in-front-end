// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:''
  },

  // 获取输入账号
  usernameInput(e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput(e) {
    this.setData({
      password: e.detail.value
    })
  },

  login(args ) {
    var username = this.data.username;
    var password = this.data.password;
    var that = this;
    if (username.length == 0 || password.length == 0) {
      wx.showModal({
        title: '提示',
        content: '用户名和密码不能为空',
      })
    } else {
      // 这里是登录验证
      getApp().helper({
        url: getApp().globalData.urlpath + '/weixinlogin',
        data: {
          username: username,
          password: password,
          ID:"wx"
        },
        success(res) {
          console.log(res);
          if (res.data.ret == 'True') {
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 1500
            });
            getApp().globalData.power = res.data.power;
            getApp().globalData.username = res.data.username;
            wx.switchTab({
              url: '../index/index',
            })
          } else {
            console.log(res.data);
            wx.showModal({
              title: '提示',
              content: '用户名或密码错误',
            })
          }
        },
        fail(res) {
          wx.showToast({
            title: '连接服务器失败',
            image: '/static/error.png',
            duration: 1500
          });
        }
      });
    }
  },

  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})