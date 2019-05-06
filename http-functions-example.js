var getHTML = require('./http-functions');

const printHTML = function(html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML);