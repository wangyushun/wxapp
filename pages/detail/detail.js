// pages/detail/detail.js
// 获取全局应用程序实例对象
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    
    this.setData({
      movieId: options.mid,
      dataFrom: options.datafrom
    });

    var url = "";
    if (options.datafrom == "douban"){
      url = "https://douban.uieee.com/v2/movie/subject/";
      
    } else if (options.datafrom == "movieDiary"){
      url = "https://api.douban.com/v2/movie/subject/1764796";
    }
    url = url +  this.data.movieId; 
    
    var page = this;
    wx.showLoading({
      title: '拼了命的加载中...',
    });
    wx.request({
      url: url, //接口地址
      header: { 'content-type': 'json'}, // 默认值
      success: function (res) {
        if (res.statusCode == 200){
          page.setData({
            movie: res.data
          })
        }
        wx.hideLoading();
      }
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
    return {
      title: "电影推荐：" + this.data.movie.title,
     // path: 'pages/index/index',
      success: function (res) {
        // 转发成功
        //console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
       // console.log("转发失败:" + JSON.stringify(res));
      }
    }
  }
})