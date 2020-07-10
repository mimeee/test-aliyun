const request = require('request');

(async (url, option) => {

  if (typeof option === 'string') {
    try {
      option = JSON.parse(option);
    } catch (err) {
      eval('option=' + option);
    }
  }
  option = option || {};

  try {
    await new Promise((resolve, reject) => {
      let html = [];
      let htmlLen = 0;
      request({
          url: "http://mimee.top/about",
          strictSSL: false,
          timeout: 200000
        })
        .on('data', (data) => {
          html.push(data);
          htmlLen += data.length;
        })
        .on('complete', (response) => {
          if (response.statusCode === 200) {
            console.log(html.join(""));
          }
        })
        .on('error', (error) => {
          console.log('error')
        })
    })
  } catch (err) {

  }
  console.log('end');
})()