// pages/handsignin/handsignin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    values:"",
    sname:"查询成功会显示该学生用户名",
    sphone:"查询成功会显示该学生电话号码",
    ret:"",
    classlist:[{
      class:"c++算法竞赛",
      images:"static/3.jpg",
      description:"信息学竞赛课程",
      RC:"1",
      id:"1"
    },
    {
      class:"c++语法 ",
      images:"static/3.jpg",
      description:"c++算法竞赛是高阶编程旨在参加小初高的算法竞赛，信息学竞赛",
      RC:"1",
      id:"2"
    }
  ]
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

  },

  getname: function(e){
    this.setData({
      values:e.detail.value
    })
  },
  qiandaofind: function(e){
    let values = this.data.values;
    let that = this
    if (values.length == 0) {
      wx.showModal({
        title: '提示',
        content: '输入信息不能为空',
      })
    } else {
      // 这里是登录验证
      getApp().helper({
        url: getApp().globalData.urlpath + '/findQD',
        data: {
          values: values
        },
        success(res) {
          console.log(res)
          if(res.data.ret == "F1"){
            that.setData({
            ret:res.data.ret,
            sname:res.data.sname,
            sphone:res.data.sphone,
            classlist:res.data.classlist
          })
          }
          else if(res.data.rer == "F2"){
            that.setData({
              sname:res.data.sname,
              sphone:res.data.sphone,
              ret:res.data.ret
            })
          }
          else{
            wx.showModal({
              title: '提示',
              content: '不存在该同学',
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
  qiandao: function(res){
    let id = res.currentTarget.dataset.id
    console.log(id)
    let that = this
    getApp().helper({
      url: getApp().globalData.urlpath + '/QD',
      data: {
        id: id
      },
      success(res) {
        that.qiandaofind()
      },
      fail(res) {
        wx.showToast({
          title: '连接服务器失败',
          image: '/static/error.png',
          duration: 1500
        });
      }
    });
  },
  qiandaoclear: function(e)
  {
    this.setData({
      values:"",
      sname:"查询成功会显示该学生用户名",
      sphone:"查询成功会显示该学生电话号码",
      classlist:[]
    })
  }
})