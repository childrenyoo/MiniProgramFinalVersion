// pages/chatbox/chatbox.js
const utilApi = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatboxId:"",
    message:[],
    index: 0,
    totalMessage:[],
    submitted: 0,
    homework: "",//最后一条message内容
    percent:0,
    favourite: [],
    isFavourite: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 打印页面contents传递过来的URL中的参数chatbox_id
    console.log(options.percent);
   	// 把this对象复制到临时变量that    
    var that = this;
  
    this.setData({
      chatboxId: options.chatbox_id,
      percent: options.percent
    })
    wx.showToast({
      title: '长按对话可添加收藏',
      icon:'none',
    })
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
    // 判断作业是否提交
    var student_id = wx.getStorageSync("accountInfo")[0].studentId;
    var chatbox_id = this.data.chatboxId;
    var percent=this.data.percent;
    console.log(percent);
    // 得到全部的聊天信息，实际情况下，如果一个页面的聊天信息比较多的化，最好能够分页加载数据
    console.log(this.data.message);
    this.totalMessage(chatbox_id,percent);
    var url = app.globalData.host + '/chatbox_homework?chatbox_id=' + chatbox_id + '&&student_id=' + student_id;
    console.log(url);
    utilApi.requestPromise(url)
      .then(res => {
        console.log("打印homework的数据");
        console.log(res.data);
        this.setData({
          submitted: res.data,
        });
      })
    console.log(this.data.message);
   
    this.setData({
      favourite: wx.getStorageSync("favourite"),
    })
    var tempIsFavourite = {};
    for (var i = 0; i < this.data.favourite.length;i++){
      tempIsFavourite[this.data.favourite[i].uuid]=true;
    }
    this.setData({
      isFavourite: tempIsFavourite
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

  addMessage:function () {
    console.log(this.data.percent);
    var i = this.data.index;
    var length=this.data.totalMessage.length;
    console.log(this.data.totalMessage.length);
    var that = this;
    // 使得按钮不能点击
    if(i>=length){
      // 跳出程序
      return;
    }

    console.log(this.data.percent);
    var message = this.data.message.concat(this.data.totalMessage[i]);
    
    that.setData({  
      message: message
    })

    i++;
    //将进度更新到缓存
    that.setContentSchedule(i/length);
    console.log(this.data.percent);
    //将更新同步到数据库
    var student_id=wx.getStorageSync("accountInfo")[0].studentId;
    var chatbox_id=this.data.chatboxId;
    var percent = (i / length * 100).toFixed(2);
    var url = app.globalData.host + '/update_chatbox?student_id=' + student_id + '&&chatbox_id=' + chatbox_id + '&&progress=' + percent;
    console.log(url);
    utilApi.requestPromise(url)
      .then(res => {
        console.log("打印更新progress的数据");
        console.log(res.data);
      })
    console.log(this.data.percent);
    that.setData({
      index: i,
      percent: ((i / length) * 100).toFixed(2)
    })    
    console.log(this.data.percent);

    var query = wx.createSelectorQuery()
    query.select('.messageHeight').boundingClientRect()
    query.exec(function (res) {
    wx.pageScrollTo({
    scrollTop: res[0].bottom+50000,
    })
  })  
  },


//将进度更新到缓存
  setContentSchedule: function(percent){
    var contentSchedule=wx.getStorageSync("content_schedule")||{};
    contentSchedule[this.data.chatboxId]=(percent*100).toFixed(2);
    wx.setStorageSync("content_schedule", contentSchedule);
  },


	totalMessage:function(chatbox_id,percent){
    console.log("percent:"+percent);
	// 通过 getApp 方法获取到全局唯一的 App 示例

   	//把this对象复制到临时变量that
   	var that = this;

   	app.chatboxApi.getMessage(chatbox_id).then(function(res)
     {
        console.log(res);
     	  that.setData({
       		totalMessage:res.message,
          chatboxId: chatbox_id,
          homework: res.message[res.message.length - 1].text
     	  })
       

       that.data.index=Math.round
       (percent/100*that.data.totalMessage.length);
       var message=[];
       for(var i=0;i<that.data.index;i++){
         message=message.concat(that.data.totalMessage[i]);
       }
      console.log(that.data.index);
      console.log("totalmessage:" + that.data.totalMessage);
      console.log("messageL:" +message.length);

       that.setData({
         message:message,
       })
        console.log("message:" + that.data.message);

   	}).catch(function(error){
		wx.showToast({
			title: '出错了！',
			icon: 'none',
		})
	})
  },

  addFavourite:function(event){
    console.log(event);
    //console.log("percent:" + this.data.percent);
    var that=this;
    var uuid=event.currentTarget.dataset.uuid;
    var text=event.currentTarget.dataset.text;
    var studentId=wx.getStorageSync("accountInfo")[0].studentId;
    wx.showModal({
      title: '确认',
      content: '添加该内容到收藏夹',
      success: function(res){
        if(res.confirm){
          console.log("确认添加收藏");
          var url = app.globalData.host +'/add_favourite?student_id=' + studentId + '&&uuid=' + uuid;
          console.log(url);
          utilApi.requestPromise(url)
            .then(res => {
              console.log(res.data);
              if(res.data!="收藏已存在"){

                //在本地缓存中添加学生收藏
                var tempFavourite=wx.getStorageSync("favourite")||[];
                tempFavourite.push({"uuid":uuid,"text":text,"chatbox_id":that.data.chatboxId});
                wx.setStorageSync("favourite", tempFavourite);
                
              }
              wx.showToast({
                title: res.data,
                icon: 'none',
              })
              console.log("percent:"+that.data.percent);
              that.onShow();
              
            })
        }else if(res.cancel){
          console.log("取消添加收藏");
          wx.showToast({
            title: "已取消",
            icon: 'none',
          })
        }
      }
    })
  }

})