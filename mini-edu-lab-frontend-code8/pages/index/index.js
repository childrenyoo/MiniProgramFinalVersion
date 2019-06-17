//index.js
//获取应用实例
const utilApi = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    firstTimeUser: true,
    openId: ""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })

    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res1 => {   
        this.setData({
          userInfo: res1.userInfo,
          hasUserInfo: true,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var that=this;
    app.userLogin(function () {
      console.log(app.globalData.openId);
      var open_id=app.globalData.openId;
      var url = app.globalData.host +'/getUserInfo?open_id=' + open_id;
      var temp =  [];
      console.log(url);
      utilApi.requestPromise(url)
        .then(res => {
          if (res.data.warning == undefined) {
            temp.push({
              "name": res.data.student_name,
              "studentId": res.data.student_id,
              "email": res.data.email,
              "sex": res.data.sex
            });
            wx.setStorageSync("accountInfo", temp);
            //找到学生的课程
            var student_id = wx.getStorageSync("accountInfo")[0].studentId;
            var url2 = app.globalData.host + '/find_student_course?student_id=' + student_id;
            utilApi.requestPromise(url2)
              .then(res => {
                console.log(res.data);
                wx.setStorageSync("myClass", res.data)
              })

            //找到学生的收藏内容
            var url = app.globalData.host + '/myfavourite?student_id=' + student_id;
            var tempFavourite = [];
            utilApi.requestPromise(url)
              .then(res => {
                console.log("打印favourite的数据");
                console.log(res.data);
                for (var i = 0; i < res.data.length; i++) {
                  tempFavourite.push({
                    "uuid": res.data[i].uuid,
                    "text": res.data[i].text,
                    "chatbox_id": res.data[i].chatbox_id
                  });
                }

                wx.setStorageSync("favourite", tempFavourite);
              })
          } else {
            console.log("请登录");
          }
          console.log(wx.getStorageSync("accountInfo"));
          that.setData({
            firstTimeUser: wx.getStorageSync("accountInfo").length == 0
          })
        })
    });
    
  },
  onReady: function () {

  },

  onShow: function(){
    this.setData({
      firstTimeUser: wx.getStorageSync("accountInfo").length == 0
    })
  },
  

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  checkUser:function(e){
    var accountInfo = wx.getStorageSync("accountInfo");
    if (accountInfo.length == 0) {
      wx.showToast({
        title: "请添加个人信息!",
        icon: 'none',
      })
    } else {
      wx.switchTab({
        url: '../course/course',
      })
    }
  }
})
