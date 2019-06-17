// pages/chatbox/assignment/assignment.js
const utilApi = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatboxId: "",
    homework: "",
    homework_contents: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      chatboxId: options.chatboxId,
      homework: options.homework
    })

    console.log(this.data.chatboxId)
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

  },

  submitHomework:function(){
    var student_id = wx.getStorageSync("accountInfo")[0].studentId;
    var chatbox_id = this.data.chatboxId;

    console.log(this.data.homework_contents);
    if(this.data.homework_contents!=""){

    var url = app.globalData.host + '/update_homework?student_id=' + student_id + '&&chatbox_id=' + chatbox_id+'&&homework_contents='+this.data.homework_contents;
    console.log(url);
    utilApi.requestPromise(url)
      .then(res => {
        console.log("打印更新homework的数据");
        console.log(res.data);
      })
      this.returnToMainPage();
    }else{
      wx.showToast({
        title: '请输入',
        icon: 'none'
      })
    }
  },

  returnToMainPage:function() {
    wx.switchTab({
      url: '../course/course',
    })
  },
  getHomework: function(e){
    //console.log(e);
    this.setData({
      homework_contents: e.detail.value,
    })
  }
})