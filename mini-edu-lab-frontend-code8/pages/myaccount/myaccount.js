// pages/myaccount/myaccount.js
const utilApi = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    validUser: false,
    myFavourite: [],
    myClass:[],
    content_schedule:{}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var accountInfo=wx.getStorageSync("accountInfo");
    console.log(accountInfo);
    if(accountInfo.length==0){
      this.setData({
        validUser: false,
      })
      wx.showToast({
        title: '请添加个人信息',
        icon:'none'
      })
    }else{
      this.setData({
        validUser: true,
        name: accountInfo[0]["name"],
        email: accountInfo[0]["email"],
        stuId: accountInfo[0]["studentId"],
        content_schedule: wx.getStorageSync("content_schedule")
      })
      
    }
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
    var accountInfo = wx.getStorageSync("accountInfo");
    console.log(wx.getStorageSync("accountInfo"));
    if (accountInfo.length != 0){
      this.setData({
        name: accountInfo[0]["name"],
        email: accountInfo[0]["email"],
        stuId: accountInfo[0]["studentId"],
        content_schedule: wx.getStorageSync("content_schedule")

      })
      console.log(this.data.content_schedule);
      var student_id = wx.getStorageSync("accountInfo")[0].studentId;
      this.setData({
        myFavourite: wx.getStorageSync("favourite")
      })
    }else{
      wx.showToast({
        title: '请添加个人信息',
        icon: 'none'
      })
    }
    this.setData({
      myClass: wx.getStorageSync("myClass"),
      validUser: wx.getStorageSync("accountInfo")!=0,
    })
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

  },
  
  //删除用户收藏
  deleteFavourite: function (event) {
    var that=this;
    var student_id = wx.getStorageSync("accountInfo")[0].studentId;
    var uuid = event.currentTarget.dataset.uuid;
    wx.showModal({
      title: '确认',
      content: '删除该收藏',
      success: function (res) {
        if (res.confirm) {
          var url = app.globalData.host+'/delete_favourite?student_id=' + student_id + '&&uuid=' + uuid;
          console.log(url);
          utilApi.requestPromise(url)
            .then(res => {
              console.log(res.data);
              var temp=wx.getStorageSync("favourite");
              var tempFavourite=[];
              for(var i=0;i<temp.length;i++){
                if(temp[i].uuid!=uuid){
                  tempFavourite.push(temp[i]);
                }
              }
              wx.setStorageSync("favourite",tempFavourite);
              that.onShow();
              wx.showToast({
                title: "已删除",
                icon: 'none',
              })
            })
        } else if (res.cancel) {
          wx.showToast({
            title: "已取消",
            icon: 'none',
          })
        }
      }
    })

  }
})