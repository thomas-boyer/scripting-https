var getHTML = require('../http-functions');

const printReverse = function(html) {
  console.log(html.split("").reverse().join(""));
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, printReverse);