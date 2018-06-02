// pages/movieDiary/movieDiary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie_list: [
      {
        mid: "6",
        poster: "/images/icon/555.jpg",
        name: "机器人瓦力",
        score: "9.3",
        descrip: "阿大发发撒个谎搜嘎 64143641again噶"
      },
      {
        mid: "7",
        poster: "/images/icon/666.jpg",
        name: "小黄人",
        score: "9.3",
        descrip: "阿大发发撒个谎搜嘎 64143641again噶"
      },
      {
        mid: "8",
        poster: "/images/icon/555.jpg",
        name: "冰河世纪",
        score: "9.3",
        descrip: "阿大发发撒个谎搜嘎 64143641again噶"
      }
    ]
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
   * 用户点击电影幻灯片
   */
  onClickedMovie: function (event) {
    var movieId = event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: '/pages/detail/detail?datafrom=movieDiary&mid=' + movieId,
    });
  }
})