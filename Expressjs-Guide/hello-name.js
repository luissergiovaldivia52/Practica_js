var express = require('express');

var app = express();

let port = 3000;

app.get('/name/:user_name', function (req, res) {
    res.send(200);
    res.set('Content-type', 'text/html');
    res.end('<html><body>' +
        '<h1>Hello' +
        req.params.user_name + '</h1>' +
        '</body></html>'
    );
});

app.get('*', function (req, res) {
    res.send('Hello Word!!');
    
});


app.listen(port, function () {

    console.log('The server is running, ' +
        'please , open your browser at http://localhost: %s', port)
});