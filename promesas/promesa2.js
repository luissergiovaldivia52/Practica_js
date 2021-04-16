var cities = ['Tokyo' , 'London', 'Boston', 'Berlin', 'Chicago', 'New York'];

// cities.forEach(function callback(city){
// 	console.log(city);
// });


// function callback(city){
// 	console.log(city);
// }

// cities.forEach(callback);

function repositionElement(){

	console.log('repositioning!');
	// ...
};

window.requestAnimationFrame(repositionElement);
console.log('I am the last line of the script');