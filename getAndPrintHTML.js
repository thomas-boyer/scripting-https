let https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  let responseText = "";

  https.get(requestOptions, function(response)
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

getAndPrintHTML();