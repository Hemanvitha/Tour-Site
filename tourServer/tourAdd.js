const rp = require('request-promise-native');
var options = {
    method: 'POST',
    uri: 'http://api.posttestserver.com/post',
    body: {
        name : "vindhya",
        place: "gujurat",
        date: "2019-1-1"

    },
    json: true // Automatically stringifies the body to JSON
};

rp(options)
    .then(function (parsedBody) {
        // POST succeeded...
    })
    .catch(function (err) {
        // POST failed...
    });