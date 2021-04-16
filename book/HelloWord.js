var http = require ('http');
var servidor = http.createServer(
		function(peticion, respuesta){
			respuesta.writeHead(200,
					{ 'Content-Type': 'text/html'

					});
			respuesta.write(
					'<!DOCTYPE html> <html><head></head>' +
					'<body><h1>Hola Mundo</h1><h2>Sergio Valdivia</h2></body></html>');
			respuesta.write(
					'<!DOCTYPE html> <html><head></head>' +
					'<body><h3>respuesta.write</h3><h4>Sergio Valdivia</h4></body></html>');
					respuesta.end();	
		});

servidor.listen(8080);
console.log('Servidor web iniciado');