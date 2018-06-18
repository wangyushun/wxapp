/**
 * Douban API 模块
 * @type {Object}
 */
const douban = require('./js/douban.js')



App({
  /**
   * Global shared
   * 可以定义任何成员，用于在整个应用中共享
   */
  data: {
    name: 'Douban Movie',
    version: '0.1.0',
    currentCity: '北京'
  },

  /**
  * Douban API
  */
  douban: douban,

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    getLocation()
      .then(res => {
        const { latitude, longitude } = res
        return getCityName(latitude, longitude)
      })
      .then(name => {
        this.data.currentCity = name.replace('市', '')
        console.log(`currentCity : ${this.data.currentCity}`)
      })
      .catch(err => {
        this.data.currentCity = '北京'
        console.error(err)
      })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})

function getLocation(type) {
  return new Promise((resolve, reject) => {
    wx.getLocation({ type: type, success: resolve, fail: reject })
  })
}


/**
 * 根据经纬度获取城市
 * @param  {Number} latitude   经度
 * @param  {Number} longitude  纬度
 * @return {Promise}       包含抓取任务的Promise
 */
function getCityName(latitude = 39.90403, longitude = 116.407526) {
  const params = { location: `${latitude},${longitude}`, output: 'json', ak: 'B61195334f65b9e4d02ae75d24fa2c53' }
  return douban.fetch('https://api.map.baidu.com', 'geocoder/v2/', params)
    .then(res => res.data.result.addressComponent.city)
}
