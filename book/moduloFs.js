var fs = require ('fs');

fs.writeFile('./archivo1.txt',
		'linea 1 Sergio\nLinea 2 Valdivia',
		function (error){
			if (error )console.log(error);
			else console.log('El archivo fue creado');
		});

console.log('Ultima linea del programa');