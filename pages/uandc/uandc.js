// pages/uandc/uandc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    values:"",
    sname:"将会显示学生姓名",
    sphone:"将会显示学生电话号码",
    shows:false,
    myclasslist:[
      {
        images:"static/3.jpg",
        class:"c+++++++",
        description:"this is a class",
        RC:"20"
      }
    ],
    classlist:[
      {
        images:"static/3.jpg",
        class:"c+++++++",
        description:"this is a class",
        keshi:"20"
      },
      {
        images:"static/3.jpg",
        class:"c+++++++",
        description:"this is a class",
        keshi:"20"
      },
      {
        images:"static/3.jpg",
        class:"c+++++++",
        description:"this is a class",
        keshi:"20"
      },
      {
        images:"static/3.jpg",
        class:"c+++++++",
        description:"this is a class",
        keshi:"20"
      },
      {
        images:"static/3.jpg",
        class:"c+++++++",
        description:"this is a class",
        keshi:"20"
      },
      {
        images:"static/3.jpg",
        class:"c+++++++",
        description:"this is a class",
        keshi:"20"
      },
      {
        images:"static/3.jpg",
        class:"c+++++++",
        description:"this is a class",
        keshi:"20"
      }
    ]
  },
  getinfo(e){
    this.setData({
      values:e.detail.value
    })
  },
  bdfind(e){
    var values = this.data.values;
    var that = this;
    if (values.length == 0 ) {
      wx.showModal({
        title: '提示',
        content: '用户名或者电话号码不能为空',
      })
    } else {
      // 这里是登录验证
      getApp().helper({
        url: getApp().globalData.urlpath + '/bdfind',
        data: {
          values: values,
          ID:"wx"
        },
        success(res) {
          console.log(res);
          if (res.data.ret == 'F1') {
              that.setData({
                sname:res.data.sname,
                sphone:res.data.sphone,
                myclasslist:res.data.myclasslist,
                classlist:res.data.classlist

              });
              if(that.data.myclasslist.length == 0){
                  that.setData({
                    shows:true
                  })
              }
          } else {
            console.log(res.data);
            wx.showModal({
              title: '提示',
              content: '用户名或手机号码错误',
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
  tuike(e){
    var ids = e.currentTarget.dataset.id
    var that = this;
    if (values.length == 0 ) {
      wx.showModal({
        title: '提示',
        content: '用户名或者电话号码不能为空',
      })
    } else {
      // 这里是登录验证
      getApp().helper({
        url: getApp().globalData.urlpath + '/tuike',
        data: {
          ids: ids,
          ID:"wx"
        },
        success(res) {
          
          
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
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})