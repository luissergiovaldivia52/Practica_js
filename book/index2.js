var servidor = http.createServer(

	function (peticion, repuesta){
		var objetourl = url.parse(peticion.url);
		var ruta = 'public' + objetourl.pathname;
		if(ruta === 'public/')
			ruta = 'public/index.html';
		procesarPeticion(peticion, repuesta)
	}
	);