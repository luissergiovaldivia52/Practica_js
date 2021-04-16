const express = require ('express')
const app = express();
const port = 3000


var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(requestTime);

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

app.use(myLogger);

app.get ('/', (req, res) =>{

	var responseText = 'Hello World!';
  responseText += 'Requested at: ' + req.requestTime + '';
	res.send(responseText)
})

app.listen(port, () =>{
	console.log('Example app listening at http://localhost: ${port}')
})

