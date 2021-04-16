var express = require('express');

var app = express();

let port = 3000;

app.get('*', function (req, res) {
    res.send('Hello Word!!');
    
});


app.listen(port, function () {

    console.log('The server is running, ' +
        'please , open your browser at http://localhost: %s', port)
});