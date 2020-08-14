var mockServerClient = require('mockserver-client').mockServerClient;
var fs = require('fs');

fs.readdir('./data-templates', function (err, files) {
    if (err)
        throw err;
    for (var index in files) {
        var data = require(`./data-templates/${files[index]}`)
        setExpectations(data.httpRequest, data.httpResponse)
    }
});

function setExpectations(httpRequest , httpResponse) {
    
    mockServerClient("3.17.75.46", 1080).mockAnyResponse({
        "httpRequest": httpRequest,
        "httpResponse": httpResponse,
        "times": {
            "remainingTimes": 2,
            "unlimited": false
        }
    }).then(
        function () {
            console.log(`🍄expectation created for path ${httpRequest.path}`);
        },
        function (error) {
            console.log(error);
        }
    )
};