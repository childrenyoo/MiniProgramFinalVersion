//app.js
import chatboxApi from './apis/chatboxApi.js';
const app_id = 'wxb0898045693d9fde';
const app_secret = 'f588469987db25c1eeee9f7af32c4ba0';
const utilApi = require('utils/util.js')
var openId='';

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
              this.globalData.userInfo["openId"] = this.globalData.openId;
        
              console.log(this.globalData.userInfo);

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  userLogin: function (fn) {
    var that = this;
    wx.login({
      success: res => {
        if (res.code) { 
          console.log(res.code);         
          var url1 = 'https://api.weixin.qq.com/sns/jscode2session';
          var data = {
            appid: app_id,
            secret: app_secret,
            js_code: res.code,
            grant_type: 'authorization_code'
          };
          utilApi.requestPromiseWithData(url1, data).then(res1 => {
            console.log(res1);
            var open_id = res1.data.openid;
            this.globalData.openId = open_id;
            fn();
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    })
  },
  
  globalData: {
    userInfo: null,
    openId: "",
    //host: 'http://localhost:8080', // 后端的域名地址
    host:'http://139.196.143.148:8080',
  },
  
  chatboxApi: new chatboxApi()
})