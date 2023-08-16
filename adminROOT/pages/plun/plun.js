// adminROOT/pages/plun/plun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    content:'',
    title:''
  },
  gettext(e){
    this.setData({
      content:e.detail.value
    })
  },
  gettitle(e){
    this.setData({
      title:e.detail.value
    })
  },
  back(){
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  todoit(){
    let username = this.data.username
    let content = this.data.content
    let title = this.data.title
    let that = this
    if (username.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请先登录',
        success(res){
          if (res.confirm) {
            wx.reLaunch({
              url: "/pages/login/login"
            });
          }
        }
      })
      return;
    }
    else
    {
      getApp().helper({
        url: getApp().globalData.urlpath + '/pluns',
        data: {
          username: username,
          title:title,
          content: content,
          ID:"wx"
        },
        success(res) {
          if (res.data.ret == 'True') {
            wx.showModal({
              title: '提示',
              content: '评论成功，感谢您的建议，管理员会尽快处理',
              success(res){
                if (res.confirm) {
                  that.back()
                }
              }
            })
          } else if(res.data.ret == 'F1') {
            wx.showModal({
              title: '提示',
              content: '评论太频繁，请歇一歇',
              success(res){
                if (res.confirm) {
                  that.back()
                }
              }
            })
          }
          else{
            wx.showModal({
              title: '提示',
              content: '请登录',
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
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      username:getApp().globalData.username
    })
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