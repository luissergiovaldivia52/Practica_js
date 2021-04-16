const express = require ('express')
const app = express ()


app.get ('/', (req,res) => res.send('Hello World!'))

app.get ('/', (req,res) => res.json({username: 'Flavio'}))
app.listen(3000, ()=> console.log ('Server ready'))


// app.get('/', (req,res) =>{/***/})
// app.post('/', (req,res)=> {/***/})
// app.put('/', (req, res)=> {/****/})
// app.delete('/', (req,res) => {/***/})
// app.patch('/', (req,res) => {/****/})

