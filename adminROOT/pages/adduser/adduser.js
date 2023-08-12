// pages/adduser/adduser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    nameshow:false,
    userphone:"",
    phoneshow:false,
    password:"",
    pswdshow:false,
    checkpassword:"",
    cpshow:false,
    power:"1",
    array:["1","2","3"],
    index:0
  },
  pickerChange:function(e){
    console.log(e.detail.value);
    this.setData({
      index:e.detail.value
    })
  },
  names(e){
    this.setData({
      username:e.detail.value
    })
    console.log(123)
    if(this.data.username.length == 0)
    {
        this.setData({
          nameshow:true
        })
    }
    else{
      this.setData({
        nameshow:false
      })
    }
  },
  phones(e){

    this.setData({
      userphone:e.detail.value
    })
    if( !(/^\d{11}$/.test(this.data.userphone)))
    {
        this.setData({
          phoneshow:true
        })
    }
    else{
      this.setData({
        phoneshow:false
      })
    }

  
  },
  pswd(e){ 
    this.setData({
      password:e.detail.value
    })
    if(this.data.password.length == 0)
    {
        this.setData({
          pswdshow:true
        })
    }
    else{
      this.setData({
        pswdshow:false
      })
    }
  },
  checkpswd(e){
    this.setData({
      checkpassword:e.detail.value
    })
    var paswd = this.data.password
    if(this.data.checkpassword != paswd)
    {
        this.setData({
          cpshow:true
        })
    }
    else{
      this.setData({
        cpshow:false
      })
    }
  },
  tijiao(){
    var username = this.data.username
    var password = this.data.password
    var userphone = this.data.userphone
    var ckpswd = this.data.checkpassword
    var power = this.data.index
    var that = this
    if (username.length == 0 || password.length == 0 || userphone.length == 0) {
      wx.showModal({
        title: '提示',
        content: '用户名和密码还有手机号码不能为空',
      })
    } 
    else if(ckpswd != password){
      wx.showModal({
        title: '提示',
        content: '两次输入的密码不一致',
      })
    }
    else {
      getApp().helper({
        url: getApp().globalData.urlpath + '/weixinregistered',
        data: {
          username: username,
          userphone:userphone,
          password: password,
          power:power,
          ID:"wx"
        },
        success(res) {
          console.log(res);
          if (res.data.ret == 'F1') {
            wx.showToast({
              title: '注册成功',
              icon: 'success',
              duration: 1500
            });
            that.setData({
              username: "",
              userphone:"",
              password: "",
              checkpassword:""
            });
            that.onLoad();
          } 
          else if(res.data.ret == 'F2'){
            console.log(res.data);
            wx.showModal({
              title: '提示',
              content: '用户名已存在',
            })
          }
          else {
            console.log(res.data);
            wx.showModal({
              title: '提示',
              content: '手机号码已存在',
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
