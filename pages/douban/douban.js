// pages/douban.js
// 获取全局应用程序实例对象
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    boards: [
      { key: 'in_theaters',datatype: 1},
      { key: 'coming_soon',datatype: 1},
      { key: 'new_movies', datatype: 1},
      //{ key: 'top250', ,datatype: 1},
      { key: 'weekly', datatype: 2},
      // { key: 'us_box' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({ title: '拼命加载中...' })
    const tasks = this.data.boards.map(board => {
      return app.douban.find(board.key, 1, 8)
        .then(d => {
          board.title = d.title
          board.movies = d.subjects;
          return board
        })
    })

    Promise.all(tasks).then(boards => {
      this.setData({ boards: boards, loading: false })
      wx.hideLoading()
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
  
  },
  
  /**
   * 用户点击电影幻灯片
   */
  onClickedMovie: function (event) {
    var movieId = event.currentTarget.dataset.movieId;
    wx.navigateTo({
      url: '/pages/detail/detail?datafrom=douban&mid=' + movieId,
    });
  },

})







