const express = require ('express')
const app = express ()

// app.get ('/', (req,res) => res.send('Hello World!'));


// app.get('/', (req,res) => res.send('Mi nombre es Sergio'))


 app.use((req, res) => {
   res.type('text/plain');
 	res.status(200);
 	res.send('OK')
 })

 app.use( (err,req, res) => {
   res.type('text/plain');
 	res.status(404);
 	res.send('Not Found')
 })

app.get('/families', (req,res) => {
    // res.type('aplication/jason')
    let array= [];
  res.type('json');
    res.status(200).send(array);
    
})


app.listen(5500, ()=> console.log ('Server ready'))


// app.get('/', (req,res) =>{/***/})
// app.post('/', (req,res)=> {/***/})
// app.put('/', (req, res)=> {/****/})
// app.delete('/', (req,res) => {/***/})
// app.patch('/', (req,res) => {/****/})

