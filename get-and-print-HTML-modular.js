let https = require('https');

var requestOptions = {
 host: 'sytantris.github.io',
 path: '/http-examples/step3.html'
};

function printHTML (html) {
  console.log(html);
}

function getHTML (options, callback) {

 let responseText = "";

 https.get(options, function(response)
   {
     response.setEncoding('utf8');

     response.on('data', function(data)
       {
         responseText += data;
       });

     response.on('end', function(data)
       {
         console.log('Data stream complete:');
         console.log(responseText);
       });
   });
}

getAndPrintHTML(requestOptions);