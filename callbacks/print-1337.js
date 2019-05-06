var getHTML = require('../http-functions');

var map = {
   a:"4",
   e:"3",
   l:"1",
   o:"0",
   s:"5",
   t:"7",
   ck:"x",
   er:"0r",
   you:"j00"
};

const print1337 = function(html) {
  let result = html.replace(/a|e|l|o|s|t|ck|er|you/gi, function(match)
    {
      return map[match.toLowerCase()];
    });
  console.log(result);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHTML(requestOptions, print1337);