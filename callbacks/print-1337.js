var getHTML = require('../http-functions');

const print1337 = function(html) {
  let result = html.replace(/(l)/gi, "1").replace(/e/gi, "3").replace(/t/gi, "7");
  console.log(result);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, print1337);