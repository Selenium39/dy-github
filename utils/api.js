const BASE_URL = 'http://43.139.171.171/github';

function request({
  url = BASE_URL,
  path,
  method = 'GET',
  data = {},
  header = {}
}) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url + path,
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