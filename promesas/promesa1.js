// var promise = new Promise(function(resolve, reject) {
// // Hacer cosas acá dentro, probablemente asincrónicas.
	
// if (/* Todo funcionó como esperabamos*/ (Math.PI) === 0 ) {
// resolve("Jooya!");
// }
// else {
// reject(Error("Algo se rompió"));
// }
// });

// var data = 1;
// promise.then(function(data) {
// // Ejecuto código sabiendo que todo salió bien
// // Siguiendo el ejemplo de arriba, data tendría adentro el string: 'Jooya!'
// 	console.log( data);
// }, function(error) {
// // La promesa fue rechazada, aca ejecutamos código para ese caso
// // Siguiendo el ejemplo de arriba, error tendría adentro el string: 'Algo se romp
// 	console.log (error)
// });


var promise = new Promise(function (resolve, reject) {
resolve(Math.PI);
reject(0); // Does nothing
resolve(Math.sqrt(-1)); // Does nothing
});



// promise.then(function (number) {
// console.log('The number is ' + number);
// })

promise.then('bonjour', {
 console.log('The number is ' + number);
})