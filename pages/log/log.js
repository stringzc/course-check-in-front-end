// pages/log/log.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:{
      qdlist:[
        {name:"zczczc",
         class:"c+++++",
         times:"2023.08.06 14:22"
      },
      {name:"zczczc",
         class:"c+++++",
         times:"2023.08.06 14:22"
      },
      {name:"zczczc",
         class:"c+++++",
         times:"2023.08.06 14:22"
      },
      {name:"zczczc",
         class:"c+++++",
         times:"2023.08.06 14:22"
      },
      {name:"zczczc",
         class:"c+++++",
         times:"2023.08.06 14:22"
      },
      {name:"zczczc",
      class:"c+++++",
      times:"2023.08.06 14:22"
   },
    {name:"zczczc",
         class:"c+++++++++++++",
         times:"2023.08.06 14:22"
      },
      {name:"zczczc",
      class:"c+++++",
      times:"2023.08.06 14:22"
   },
   {name:"zczczc",
   class:"c+++++",
   times:"2023.08.06 14:22"
},
      ],
      dllist:[
        {name:"zczczc",
         ip:"127.255.255.255",
         times:"2023.08.06 14:22"
      },
      {name:"zczczc",
      ip:"127.0.0.1",
         times:"2023.08.06 14:22"
      },
      {name:"zczczc",
      ip:"127.0.0.1",
         times:"2023.08.06 14:22"
      },
      {name:"zczczc",
      ip:"127.0.0.1",
         times:"2023.08.06 14:22"
      },
      {name:"zczczc",
      ip:"127.0.0.1",
         times:"2023.08.06 14:22"
      },
      ]
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this
    getApp().helper({
      url: getApp().globalData.urlpath + '/logs',
        data: {
          ID: "wx"
        },
        success(res) {
          that.setData({
            lists:res.data
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