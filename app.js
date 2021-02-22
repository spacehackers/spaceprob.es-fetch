const fetch =  require('node-fetch');
var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();

module.exports = api;

api.get('/hello', function() {
  return 'hi!';
});

api.get('/solo', function (request) {
  return fetch('http://estracknow.esa.int/live/mission/SOLO').then(res => res.json())
},{
  success: { contentType: 'application/json', headers: { "Cache-Control": "max-age=1800" }  }
});
