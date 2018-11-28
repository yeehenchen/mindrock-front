// pages/dashboard/dashboard.js
Page({

  data: {
  },

  journalLog: function (e) {
    console.log(e)
    const data = e.currentTarget.dataset
    const assignment_id = data.assignment

    wx.navigateTo({
      url: `../journal/journal?id=${assignment_id}`,
    })
  },

  getDashboardData() {
    const userId = wx.getStorageSync("userId")

    const app = getApp()
    const dev = app.globalData.dev

    const page = this

    wx.request({
      url: dev + `api/v1/users/${userId}`,
      method: "GET",
      success(res) {
        page.setData(
          res.data
        )
      }
    })
    const d = new Date()
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const day = d.getDate()
    const date = `${year}-${month}-${day}`
    this.setData({
      currentDay: date
    })

    console.log(this.data)
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.getDashboardData()
  },

  /**

   * Lifecycle function--Called when page is initially rendered

   */
  onReady: function () {

  },

  onShow: function () {

  },

  /**

   * Lifecycle function--Called when page hide
r
   */
  onHide: function () {

  },

  /**

   * Lifecycle function--Called when page unload

   */
  onUnload: function () {

  },

  /**

   * Page event handler function--Called when user drop down

   */
  onPullDownRefresh: function () {

  },

  /**

   * Called when page reach bottom

   */
  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})