const express = require ('express')
const app = express ()

app.set('port', process.env.PORT || 3000);

//custom 404 page
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

//custom 500 page

app.use(function(err, req, res, next){
	console.log(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});

app.get ('/', (req,res) => {

		for (const key in req.query){
			console.log(key, req.query[key]);
		}}
	
app.listen(8080, ()=> console.log ('Server ready'))


// app.get('/', (req,res) =>{/***/})
// app.post('/', (req,res)=> {/***/})
// app.put('/', (req, res)=> {/****/})
// app.delete('/', (req,res) => {/***/})
// app.patch('/', (req,res) => {/****/})

