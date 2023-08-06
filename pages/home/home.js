// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    pwdAnimationData:{},
    hidden: false,
    passwordNew: '',
    passwordConfirm: '',
    adminpower: 5
  },

  passwordNew: function(e) {
    this.setData({
      passwordNew: e.detail.value
    })
  },

  passwordConfirm: function(e) {
    this.setData({
      passwordConfirm: e.detail.value
    })
  },

  changePassword: function(e) {
    if (this.data.username.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请先登录',
        success: function (res) {
          if (res.confirm) {
            wx.reLaunch({
              url: "/pages/login/login"
            });
          }
        }
      })
      return;
    }
    this.animation.bottom("0rpx").height("100%").step();
    this.setData({
      pwdAnimationData: this.animation.export(),
      hidden: true
    })
  },

  confirm: function(e) {
    var password = this.data.passwordNew;
    var passwordConfirm = this.data.passwordConfirm;
    var username = this.data.username;
    if (password != passwordConfirm) {
      wx.showToast({
        title: '确认密码错误',
        image: '/static/error.png',
      })
    } else if (password.length == 0) {
      wx.showToast({
        title: '密码不能为空',
        image: '/static/error.png',
      })
    } else if (password.length < 6) {
      wx.showToast({
        title: '密码太短',
        image: '/static/error.png',
      })
    } else {
      this.helper({
        url: getApp().globalData.urlpath + '/changePassword',
        data: {
          username: username,
          password: password
        },
        success(res) {
          if (res.data == 'True') {
            wx.showToast({
              title: '密码修改成功',
              icon: 'success'
            });
          } else {
            wx.showToast({
              title: '未知错误',
              image: '/static/error.png'
            });
          }
        },
        fail(res) {
          wx.showToast({
            title: '服务器访问错误',
            image: '/images/error.png'
          });
        }
      });
      this.animation.bottom("-100%").height("0rpx").step();
      this.setData({
        pwdAnimationData: this.animation.export(),
        hidden: false,
        passwordNew: '',
        passwordConfirm: ''
      })
    }
  },

  cancel: function(e) {
    this.animation.bottom("-100%").height("0rpx").step();
    this.setData({
      pwdAnimationData: this.animation.export(),
      hidden: false,
      passwordNew: '',
      passwordConfirm: ''
    })
  },

  signOut: function (e) {
    wx.reLaunch({
      url: "/pages/login/login"
    })
  },
  signin: function(e){
    wx.navigateTo({
      url: '/pages/signin/signin',
    })
  },
  handsignin: function(e){
    wx.navigateTo({
      url: '/pages/handsignin/handsignin',
    })
  },
  goadmin: function(e){
    wx.navigateTo({
      url: '/pages/admin/admin',
    })
  },
  helper: function (args) {
    var header = {
      'content-type': 'application/json',
      'Accept': 'application/json',
      'cookie': wx.getStorageSync("sessionid")
    };
    wx.request({
      url: args.url,
      method: "POST",
      header: header,
      data: args.data,
      success(res) {
        var cookie = res.header["Set-Cookie"];
        if (cookie != null) {
          wx.setStorageSync("sessionid", res.header["Set-Cookie"]);
        }
        if (args.success) args.success(res);
      },
      complete(res) {
        if (args.complete) args.complete(res);
      },
      fail(res) {
        if (args.fail) args.fail(res);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var username = getApp().globalData.username;
    var power = getApp().globalData.power
    this.setData({
      username: username,
      adminpower:power
    });
    console.log(username)
    this.animation = wx.createAnimation({
      duration: 400, // 整个动画过程花费的时间，单位为毫秒
      timingFunction: "ease", // 动画的类型
      delay: 0 // 动画延迟参数
    });
    this.setData({
      pwdAnimationData: this.animation.export()
    })
  },
})