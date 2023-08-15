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
        id:"01",
        name:"c+++++",
        color:"red",
        width:"50%",
        url:"/static/hf1.png"
      },
      {
        id:"10",
        name:"c+++++",
        color:"IndianRed",
        width:"60%",
        url:"/static/hf2.png"
      }
    ],
    clslist:[
      {
        id:"01",
        name:"c+++++",
        color:"red",
        url:"/static/hf2.png"
      },
      {
        id:"10",
        name:"c+++++",
        color:"IndianRed",
        url:"/static/hf2.png"
      }
    ],
    datelist:[
      {
        id:"10",
        name:"c+++++",
        checked:false
      }
    ],
    dllist:[
      {
        name:"zczczc",
        times:"2023.08.06 14:22"
      },
      {
        name:"zczczc",
        times:"2023.08.06 14:22"
      },
      {
        name:"zczczc",
        times:"2023.08.06 14:22"
      },
      {
        name:"zczczc",
        times:"2023.08.06 14:22"
      },
      {
        name:"zczczc",
        times:"2023.08.06 14:22"
      },
      {
        name:"zczczc",
        times:"2023.08.06 14:22"
      },
      {
        name:"zczczc",
        times:"2023.08.06 14:22"
      },
      {
        name:"zczczc",
        times:"2023.08.06 14:22"
      },
      {
        name:"zczczc",
        times:"2023.08.06 14:22"
      },
    ],
    bdlist:[
    ],
    qdlist:[
      {name:"zczczc",
       class:"c+++++",
       times:"2023.08.06 14:22"
    }
    ],
    thisi:-1,
    thiscolor:"",
    checks:false,
    array: ['一个月前', '三个月前', '一年前', '全部'],
    index:0,
    tab34checks:false,
    tab33checks:false,
    tab32checks:false,
    tab31checks:false

  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  clickmes(e){
    this.setData({
      checks: !this.data.checks
    })
    var checks = this.data.checks
    var lists  = this.data.datelist
    for(var i = 0; i < lists.length; i ++ )
    {
      lists[i].checked = checks
    }
    this.setData({
        datelist:lists
      })
  },
  onTabClick(e) {
    let id = e.currentTarget.id
    let that = this
    this.setData({
      tabIndex: id,
    })
    
    // if(id == 0)
    // {

    // }
    // else if(id == 1)
    // {
    //   getApp().helper({
    //     url: getApp().globalData.urlpath + '/getcls',
    //     data: {
    //       ID:"wx"
    //     },
    //     success(res) {
    //       that.setData({
    //         clslist:res.data.clslist
    //       })
    //     },
    //     fail(res) {
    //       wx.showToast({
    //         title: '连接服务器失败',
    //         image: '/static/error.png',
    //         duration: 1500
    //       });
    //     }
    //   });
    // }
    // else
    // {

    // }
  },
  anxia(e){
    var id = e.currentTarget.dataset.id
    var lists = this.data.clslist
    var lasti = this.data.thisi
    var lastcolor = this.data.thiscolor
    var that = this
    if(lastcolor.length!=0 && lasti != -1)
    {
      lists[lasti].color = lastcolor
      that.setData({
        clslist:lists
      })
    }
    for(var i = 0; i < lists.length; i ++ )
    {
      if(lists[i].id == id)
      {
        var newcolor = lists[i].color
        lists[i].color = "Gainsboro"
        that.setData({
          clslist:lists,
          thisi:i,
          thiscolor:newcolor
        })
      }
    }
    getApp().helper({
      url: getApp().globalData.urlpath + '/getdate',
      data: {
        id: id,
        ID:"wx"
      },
      success(res) {
        that.setData({
          datelist:res.data.datelist
        })
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