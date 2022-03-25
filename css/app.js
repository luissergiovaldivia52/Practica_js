// const ProgressBar = require('progress')

// const oranges = ['orange', 'orange']

// const apples = ['just one apple']

// oranges.forEach(fruit => {
//   console.count(fruit)
// });

// apples.forEach(fruit =>{
//   console.count(fruit)
//   console.log('\x1b[36m%s\x1b[0m', 'hi!')
// })



// const bar = new ProgressBar(':bar', { total: 10})
// const timer = setInterval(() => {
//   bar.tick()
//   if (bar.complete) {
//     clearInterval(timer)
//   }
// }, 10)

// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readline.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`)
//   readline.close()
// })

// const inquirer = require('inquirer')

// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?"
//   }
// ]

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers['name']}!`)
// })

// const EventEmitter = require('events')
// const eventEmitter = new EventEmitter()

// eventEmitter.on('start', () => {
//   console.log('started')
// })

// eventEmitter.emit('start')


// eventEmitter.on('start', number => {
//   console.log(`started ${number}`)
// })

// eventEmitter.emit('start', 23)

// eventEmitter.on('start', (start, end) => {
//   console.log(`started from ${start} to ${end}`)
// })

// eventEmitter.emit('start', 1, 100)

// const axios = require('axios')

// axios
//   .get('https://www.cadena3.com')
//   .then(res => {
//     console.log(`statusCode: ${res.status}`)
//     console.log(res)
//   })
//   .catch(error => {
//     console.error(error)
//   })

 //const http = require('https')
// const options = {
//   hostname: 'www.cadena3.com',
//   port: 443,
//   path: '/',
//   method: 'GET'
// }

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`)

//   res.on('data', d => {
//     process.stdout.write(d)
//   })
// })

// req.on('error', error => {
//   console.error(error)
// })

// req.end()

// const server = http.createServer((req, res) => {
//   // we can access HTTP headers
//   req.on('data', chunk => {
//     console.log(`Data chunk available: ${chunk}`)
//   })
//   req.on('end', () => {
//     //end of data
//   })
// })

// const server = http.createServer((req, res) => {
//   let data = '';
//   req.on('data', chunk => {
//     data += chunk;
//   })
//   req.on('end', () => {
//     console.log(JSON.parse(data).todo); // 'Buy the milk'
//     res.end();
//   })
// })

// const path = require('path')
// const notes = '/users/joe/notes.txt'

// const directorios = path.dirname(notes) // /users/joe
// const archivo = path.basename(notes) // notes.txt
// const extension = path.extname(notes) // .txt

// console.log(directorios)
// console.log(archivo)
// console.log(extension)

// const fs = require('fs')

// fs.readFile('C:/Users/Sofia/Documents/Cursos_plc/Practica_js/css/test.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })


//const fs = require('fs')

// const content = 'Some content!'

// fs.writeFile('C:/Users/Sofia/Documents/Cursos_plc/Practica_js/css/test.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })

// try {
//   const data = fs.readFileSync('C:/Users/Sofia/Documents/Cursos_plc/Practica_js/css/test.txt', 'utf8')
//   console.log(data)
// } catch (err) {
//   console.error(err)
// }

// const content = 'Some content!'

// fs.appendFile('file.log', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //done!
// })

// const fs = require('fs')
// const path = require('path')

// const folderPath = 'C:/Users/Sofia/Documents/Cursos_plc/Practica_js/css'

// console.log("paso 1")
// fs.readdirSync(folderPath).map(fileName => {
//   console.log("paso 2")
//   return path.join(folderPath, fileName)
// })

// console.log("paso 3")


// Node.js program to demonstrate the   
// os.cpus() method
  
// Allocating os module
//const os = require('os');
  
// Printing os.cpus() values
//console.log(os.cpus());


// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   console.log("paso 1");
//   const stream = fs.createReadStream(__dirname + '/data.txt');

//   console.log("paso 2");

//   stream.pipe(res);
//   console.log("paso 3");

// })
// server.listen(3000)

// const Stream = require('stream')

// const readableStream = new Stream.Readable({
//   read() {}
// })
// const writableStream = new Stream.Writable()

// writableStream._write = (chunk, encoding, next) => {
//   console.log(chunk.toString())
//   next()
// }

// readableStream.pipe(writableStream)

// readableStream.push('hi!')
// readableStream.push('ho!')

// readableStream.on('readable', () => {
//   console.log(readableStream.read())
// })


// const Stream = require('stream')

// const readableStream = new Stream.Readable({
//   read() {}
// })
// const writableStream = new Stream.Writable()

// writableStream._write = (chunk, encoding, next) => {
//   console.log(chunk.toString())
//   next()
// }

// readableStream.pipe(writableStream)

// readableStream.push('hi!')
// readableStream.push('ho!')

// readableStream.on('close', () => writableStream.end())
// writableStream.on('close', () => console.log('ended'))

// readableStream.destroy()

// readableStream.on('readable', () => {
//   console.log(readableStream.read())
// })


const obj = {
  name: 'joe',
  age: 35,
  person1: {
    name: 'Tony',
    age: 50,
    person2: {
      name: 'Albert',
      age: 21,
      person3: {
        name: 'Peter',
        age: 23
      }
    }
  }
}
//console.log(obj)

console.log(JSON.stringify(obj, null, 2))