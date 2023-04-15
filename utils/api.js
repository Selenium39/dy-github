const BASE_URL = 'https://api.github.com';

function request({
  path,
  method = 'GET',
  data = {},
  header = {}
}) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: BASE_URL + path,
      data,
      method,
      header,
      success: function (res) {
        resolve(res.data);
      },
      fail: function (res) {
        reject(res);
      }
    });
  });
}

module.exports = {
  request
};