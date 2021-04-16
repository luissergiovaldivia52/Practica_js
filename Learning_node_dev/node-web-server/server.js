const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', (rep, res) => {
    //res.send('<h1>Hello Express!!</h1>');
    res.send({
        name: 'Andrew',
        likes: [
            'Biking',
            'Cities'
        ]
    })
});

let about = '<html><head>\
                <title>About Page</title>\
        </head > <body>\
        <h1>About Page is Sergio </h1>\
        <p> Some Text here </p>\
        <footer>\
        <p> Copyright 2021 </p>\
        </footer >\
    </body></html>'
app.get('/about', (req, res) => {

   // res.send('About Page');
    res.send(about)
    
});

app.get('/bad', (req, res) => {
    res.send({
        errorMenssage: 'Unable to handle request'
    });
});

app.listen(3000, () => {
    console.log ('Server is up on port 3000')
});