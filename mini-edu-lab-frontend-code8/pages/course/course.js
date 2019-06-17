// pages/course/course.js
const utilApi = require('../../utils/util.js')
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    Catalog:[],
    courses:[],
    isMyClass:{},
    validUser: true,
    i: 1,
    course_url : [
      "https://s2.ax1x.com/2019/06/06/VdrZh4.png",
      "https://s2.ax1x.com/2019/06/06/VdrVNF.png",
      "https://s2.ax1x.com/2019/06/06/VdrEAU.png",
      "https://s2.ax1x.com/2019/06/06/Vdrk7T.png",
      "https://s2.ax1x.com/2019/06/06/VdrFBV.png",
      "https://s2.ax1x.com/2019/06/06/Vdrin0.png",
      "https://s2.ax1x.com/2019/06/06/VdrCXq.png",
      "https://s2.ax1x.com/2019/06/06/Vdr9cn.png",
      "https://s2.ax1x.com/2019/06/06/Vdrp1s.png",
      "https://s2.ax1x.com/2019/06/06/VdrSpj.png",
      "https://s2.ax1x.com/2019/06/06/VdDxhQ.png",
      "https://s2.ax1x.com/2019/06/06/VdDvtg.png",
      "https://s2.ax1x.com/2019/06/06/VdDjAS.png",
      "https://s2.ax1x.com/2019/06/06/VdDO78.png",
      "https://s2.ax1x.com/2019/06/06/VdDL0f.png"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    //更新本地缓存中的myClass
    if (wx.getStorageSync("accountInfo") && wx.getStorageSync("accountInfo").length!=0){
      this.setData({
        validUser: true,
      })
      var that = this;
      var url = app.globalData.host +"/course";
      utilApi.requestPromise(url)
        .then(res => {
          console.log(res.data);
          this.setData({
            courses: res.data
          })
          this.setisMyClass(wx.getStorageSync("myClass") || []);
          while (this.data.courses.length > this.data.course_url.length) {
            var tempUrl = this.data.course_url;
            tempUrl=tempUrl.concat(tempUrl);
            console.log(tempUrl);
            this.setData({
              course_url: tempUrl,
            })
          }
        })
      
    }else{
      this.setData({
        validUser: false,
      })
  
      wx.showToast({
        title: "请添加个人信息!",
        icon: 'none',
      })
    }
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
  

  /**
   * 参与课程
   */
  addClass:function(event){
    var myClass =[];
    myClass= wx.getStorageSync("myClass")||[];
    console.log(event);
    var course_name = event.currentTarget.dataset.course_name;
    var content_id=event.currentTarget.dataset.content_id;
    var course_id = event.currentTarget.dataset.course_id;
    myClass.push({ course_id:course_id,course_name: course_name, content_id: content_id });
    wx.setStorageSync("myClass", myClass);


    //更新isMyClass
    this.setisMyClass(myClass);
    console.log(this.data.isMyClass);
   
   //将更新同步到数据库
   var course_id=event.currentTarget.dataset.course_id;
   var student_id=wx.getStorageSync("accountInfo")[0].studentId;
    console.log(wx.getStorageSync("accountInfo"));
   console.log(student_id);
    var url = app.globalData.host +'/student_course?student_id='+student_id+'&&course_id='+course_id;
    utilApi.requestPromise(url)
      .then(res => {
        console.log(res.data);
      })

  },

  /*
  *更新isMyClass数组
  **/
  setisMyClass:function(myClass){
    for(var i=0;i<this.data.courses.length;i++){
      var course_name=this.data.courses[i].course_name;
      for(var j=0;j<myClass.length;j++){
        if(course_name==myClass[j].course_name){
          this.data.isMyClass[course_name]=true;
          break;
        }
      }
      if(this.data.isMyClass[course_name]!=true){
        this.data.isMyClass[course_name]=false;
      }
      
    }
    this.setData({
      isMyClass: this.data.isMyClass
    })
  }
  
})