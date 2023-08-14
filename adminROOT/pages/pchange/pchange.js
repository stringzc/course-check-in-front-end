// pages/pchange/pchange.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ['小程序管理', '用户管理', '信息管理'],
    tabIndex: 0,
    days:100,
    users:50,
    Hots:[
      {
        name:"c+++++",
        color:"red",
        width:"50%",
        url:"/static/hf1.png"
      },
      {
        name:"c+++++",
        color:"#F3D853",
        width:"60%",
        url:"/static/hf2.png"
      },
      {
        name:"c+++++",
        color:"#F16D2F",
        width:"70%",
        url:"/static/hf3.png"
      },
      {
        name:"c+++++",
        color:"#F16D2F",
        width:"70%",
        url:"/static/hf3.png"
      },
      {
        name:"c+++++",
        color:"#F16D2F",
        width:"70%",
        url:"/static/hf3.png"
      },
      {
        name:"c+++++",
        color:"#F16D2F",
        width:"70%",
        url:"/static/hf3.png"
      },
      {
        name:"c+++++",
        color:"#F16D2F",
        width:"70%",
        url:"/static/hf3.png"
      },
      {
        name:"c+++++",
        color:"#F16D2F",
        width:"70%",
        url:"/static/hf3.png"
      },
      {
        name:"c+++++",
        color:"#F16D2F",
        width:"70%",
        url:"/static/hf3.png"
      },
      {
        name:"c+++++",
        color:"#F16D2F",
        width:"70%",
        url:"/static/hf3.png"
      },
      {
        name:"c+++++",
        color:"#F16D2F",
        width:"70%",
        url:"/static/hf3.png"
      },


    ],
    kuan:500,
    color:"red"

  },
  onTabClick(e) {
    let id = e.currentTarget.id;
    this.setData({
      tabIndex: id,
    })
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