const doWorkPromise = new Promise((resolve, reject) => {
setTimeout(() => {

resolve([{priemro: 7, segundo: 4, tercero: 1}])
//resolve([7, 4, 1])
// reject('Things went wrong!')
}, 2000)
})
doWorkPromise
.then((result) => {
//console.log('Success!', result)
//const array = ['Success!', result]
let segundo = [{cuarto: 3, quinto: 4, sexto: 5}]
const array = [...result, ...segundo]
return array
})
.then((array) =>{

	return	console.log('Este array es la concatenacion ', array)
	})
.catch((error) => {
console.log('Error!', error)
})