module.exports = function getHTML (options, callback) {

  const https = require('https');

  let responseText = "";

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data)
      {
        responseText += data;
      });

    response.on('end', function(data)
      {
        if (callback)
        {
          console.log('Data stream complete:');
          callback(responseText);
        }
      });
    });
}

