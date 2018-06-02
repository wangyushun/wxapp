// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: 
      {
        mid: "1764796",
        poster: "/images/icon/555.jpg",
        name: "机器人瓦力",
        score: "9.3",
        director: "安德鲁·斯坦顿",
        actor: " 本·贝尔特 / 艾丽莎·奈特 / 杰夫·格尔林 / 佛莱德·威拉特 / 西格妮·韦弗",
        descrip: "阿大发发撒个谎搜嘎 64143641again噶"
      }
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
      //url = "https://api.douban.com/v2/movie/subject/";
      url = "https://douban.uieee.com/";
    } else if (options.datafrom == "movieDiary"){
      url = "https://api.douban.com/v2/movie/subject/1764796";
    }
    url = url +  this.data.movieId; 

    wx.request({
      url: url, //接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        if (res.statusCode == 200){
          this.setData({
            movie: res.data
          })
        }
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
  
  }
})