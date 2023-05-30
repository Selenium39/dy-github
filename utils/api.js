const BASE_URL = 'https://mihoyonb.com/github';

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