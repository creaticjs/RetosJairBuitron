// Arreglo que contiene las url de las iamgenes de las peliculas
films = [
	{
		name: 1,
		url: 'img/films/film-1.png'
	},
	{
		name: 2,
		url: 'img/films/film-2.png'
	},
	{
		name: 3,
		url: 'img/films/film-3.png'
	},
	{
		name: 4,
		url: 'img/films/film-4.png'
	},
	{
		name: 5,
		url: 'img/films/film-5.png'
	},
	{
		name: 6,
		url: 'img/films/film-6.png'
	},
	{
		name: 7,
		url: 'img/films/film-7.png'
	}
]

persons = [
	{
		name: 'Beru Whitesun lars',
		url: 'img/persons/Beru Whitesun lars.png'
	},
	{
		name: 'Biggs Darklighter',
		url: 'img/persons/Biggs Darklighter.png'
	},
	{
		name: 'C-3PO',
		url: 'img/persons/C-3PO.png'
	},
	{
		name: 'Darth Vader',
		url: 'img/persons/Darth Vader.png'
	},
	{
		name: 'Leia Organa',
		url: 'img/persons/Leia Organa.png'
	},
	{
		name: 'Luke Skywalker',
		url: 'img/persons/Luke Skywalker.png'
	},
	{
		name: 'Obi-Wan Kenobi',
		url: 'img/persons/Obi-Wan Kenobi.png'
	},
	{
		name: 'Owen Lars',
		url: 'img/persons/Owen Lars.jpg'
	},
	{
		name: 'R2-D2',
		url: 'img/persons/R2-D2.png'
	},
	{
		name: 'R5-D4',
		url: 'img/persons/R5-D4.png'
	}
]

especies = [
	{
		name: 'Dug',
		url: 'img/especies/Dug.png'
	},
	{
		name: 'Ewok',
		url: 'img/especies/Ewok.png'
	},
	{
		name: 'Gungan',
		url: 'img/especies/Gungan.jpg'
	},
	{
		name: 'Hutt',
		url: 'img/especies/Hutt.png'
	},
	{
		name: 'Mon Calamari',
		url: 'img/especies/Mon Calamari.png'
	},
	{
		name: 'Neimodian',
		url: 'img/especies/Neimodian.png'
	},
	{
		name: 'Sullustan',
		url: 'img/especies/Sullustan.png'
	},
	{
		name: 'Toydarian',
		url: 'img/especies/Toydarian.png'
	},
	{
		name: 'Trandoshan',
		url: 'img/especies/Trandoshan.jpg'
	},
	{
		name: "Yoda's species",
		url: "img/especies/Yoda's species.png"
	}
]

// Funcion que inicializa la seccion se muestra y las que van a estar ocultas
window.onload = function(){
	seccion_lista.style.display = (seccion_lista.style.display == 'none') ? 'none' : 'none';
	detail_film.style.display = (detail_film.style.display == 'none') ? 'none' : 'none';
}

// Variables globales
var seccion_inicio = document.getElementById('seccion_inicio');
var seccion_lista = document.getElementById('seccion_lista');
var detail_film = document.getElementById('detail_film');
var lista_film = [];


datosConsulta = {};
// Funcion principal encargada de hacer las peticiones a SWAPI
// recibe como argumento una url y de acuerdo al endpoint pinta la lista de
// de peliculas, personajes, especies, naves y vehiculos
function getUrl(url){
	var peticion  = new  XMLHttpRequest();
	peticion.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			datosConsulta = JSON.parse(this.responseText);
			var lista = datosConsulta.results;
			if(url == 'https://swapi.co/api/films'){
				seccion_inicio.style.display = (seccion_inicio.style.display == 'none') ? 'none' : 'none';
				detail_film.style.display = (detail_film.style.display == 'none') ? 'none' : 'none';
				seccion_lista.setAttribute('style','diplay : activate');
				pintarPelicula(lista);
			}
			if(url == 'https://swapi.co/api/people'){
				seccion_inicio.style.display = (seccion_inicio.style.display == 'none') ? 'none' : 'none';
				seccion_lista.setAttribute('style','diplay : activate');
				pintarPersonaje(lista);
			}
			if(url == 'https://swapi.co/api/species'){
				seccion_inicio.style.display = (seccion_inicio.style.display == 'none') ? 'none' : 'none';
				seccion_lista.setAttribute('style','diplay : activate');
				pintarEspecie(lista);
			}
			if(url == 'https://swapi.co/api/planets'){
				seccion_inicio.style.display = (seccion_inicio.style.display == 'none') ? 'none' : 'none';
				seccion_lista.setAttribute('style','diplay : activate');
				pintarPlaneta(lista);
			}
			if(url == 'https://swapi.co/api/starships'){
				seccion_inicio.style.display = (seccion_inicio.style.display == 'none') ? 'none' : 'none';
				seccion_lista.setAttribute('style','diplay : activate');
				pintarNave(lista);
			}
			if(url == 'https://swapi.co/api/vehicles'){
				seccion_inicio.style.display = (seccion_inicio.style.display == 'none') ? 'none' : 'none';
				seccion_lista.setAttribute('style','diplay : activate');
				pintarVehiculo(lista);
			}
		}
	}
	peticion.open('GET',url,true);
	peticion.send();
	}

// Funcion que recibe un identificador una lista y 
// busca de acuerdo al id que imagen corresponde a la pelicula 	
function buscarFilm(id, lista){
	var img = '';
	for(i of lista){
		if(id == i.name){
			img = '<img src="'+ i.url +'" width="150" height="100"></img>';
		}
	}
	return img;	
}

// Funcion que recibe un nombre una lista y 
// busca de acuerdo al nombre que imagen corresponde al personaje	
function buscarPerson(nombre, lista){
	var img = '';
	for(i of lista){
		if(nombre == i.name){
			img = '<img src="'+ i.url +'" width="110" height="160"></img>';
		}
	}
	return img;	
}

// Funcion que recibe un nombre una lista y 
// busca de acuerdo al nombre que imagen corresponde de la especie
function buscarEspecie(nombre, lista){
	var img = '';
	for(i of lista){
		if(nombre == i.name){
			img = '<img src="'+ i.url +'" width="110" height="160"></img>';
		}
	}
	return img;	
}


function detalleFilmUrl(id){
	var url = '';
	lista_film.forEach(element =>{
		if(id == element.title){
			url = element.url;
		}
	})
	return url;
}

// Funcion que crea la tabla con la lista de peliculas
function pintarPelicula(lista){
	tbodylista.innerHTML = '';
	lista_titulo.innerHTML = 'Lista de Peliculas';
	
    lista.forEach(element => {
		var film = {}
		film['title'] = element.title;
		film['url'] = element.url;
		lista_film.push(film);
        var tr = document.createElement('tr');
		var td = `<td>${buscarFilm(element.episode_id,films)}</td>`;
		tr.innerHTML = `${td}
						<th scope="row">
							<br><br>
							<a href="#" id="${element.title}">${element.title}</a>
						</th>
						`;
		tbodylista.appendChild(tr);
	});
	
	var la = document.querySelectorAll(".class_generic th a");
	
	la.forEach(function (data){
		//ahora le asignamos una función anonima al evento onclick
		data.onclick = function (){
		//mostramos un alert con el id del elemento que se hizo click
		var detalle_film_url = detalleFilmUrl(data.id);
		seccion_lista.style.display = (seccion_lista.style.display == 'none') ? 'none' : 'none';
		detail_film.setAttribute('style','diplay : activate');
				
		getPeticion(detalle_film_url,renderDetallePelicula,function(){
			swal({
				type: 'success',
				title: 'Carga completa!',
				showConfirmButton: false,
  				timer: 3000
			})
		});
	}
});
}

// Funcion que crea la tabla con la lista de personajes
function pintarPersonaje(lista){
	tbodylista.innerHTML = '';
	lista_titulo.innerHTML = 'Lista de Personajes';
    lista.forEach(element => {
		var tr = document.createElement('tr');
		console.log(element.name);
		var td = `<td>${buscarPerson(element.name,persons)}</td>`;
		tr.innerHTML = `${td}
						<th scope="row">
							<br><br><br>
							<a href="#" id="${element.name}">${element.name}</a>
						</th>`;
		tbodylista.appendChild(tr);
	});
}

// Funcion que crea la tabla con la lista de especies
function pintarEspecie(lista){
	tbodylista.innerHTML = '';
	lista_titulo.innerHTML = 'Lista de Especies';
    lista.forEach(element => {
		var tr = document.createElement('tr');
		console.log(element.name)
		var td = `<td>${buscarEspecie(element.name,especies)}</td>`;
		tr.innerHTML = `${td}
						<th scope="row">
							<br><br>
							<a href="#" id="${element.name}">${element.name}</a>
						</th>`;
		tbodylista.appendChild(tr);
	});
}

// Funcion que crea la tabla con la lista de planetas
function pintarPlaneta(lista){
	tbodylista.innerHTML = '';
	lista_titulo.innerHTML = 'Lista de Planetas';
    lista.forEach(element => {
        var tr = document.createElement('tr');
		// var td = `<td>${buscarFilm(element.episode_id,films)}</td>`;
		tr.innerHTML = `
						<th scope="row">${element.name}</th>
						<td>
							<a href="#">ver</a>
						</td>`;
		tbodylista.appendChild(tr);
	});
}

// Funcion que crea la tabla con la lista de Naves
function pintarNave(lista){
	tbodylista.innerHTML = '';
	lista_titulo.innerHTML = 'Lista de Naves';
    lista.forEach(element => {
        var tr = document.createElement('tr');
		// var td = `<td>${buscarFilm(element.episode_id,films)}</td>`;
		tr.innerHTML = `
						<th scope="row">${element.name}</th>
						<td>
							<a href="#">ver</a>
						</td>`;
		tbodylista.appendChild(tr);
	});
}

// Funcion que crea la tabla con la lista de Vehiculos
function pintarVehiculo(lista){
	tbodylista.innerHTML = '';
	lista_titulo.innerHTML = 'Lista de Vehiculos';
    lista.forEach(element => {
        var tr = document.createElement('tr');
		// var td = `<td>${buscarFilm(element.episode_id,films)}</td>`;
		tr.innerHTML = `
						<th scope="row">${element.name}</th>
						<td>
							<a href="#">ver</a>
						</td>`;
		tbodylista.appendChild(tr);
	});
}

// Evento que llama la funcion getUrl()	cuando dan clic en peliculas
peliculas.onclick = function(event) {
	var url = 'https://swapi.co/api/films';
	getUrl(url);
}

// Evento que llama la funcion getUrl()	cuando dan clic en personajes
personajes.onclick = function(event) {
	var url = 'https://swapi.co/api/people';
	getUrl(url);
}

// Evento que llama la funcion getUrl()	cuando dan clic en especies
especie.onclick = function(event) {
	// console.log("Hola Especie");
	var url = 'https://swapi.co/api/species';
	getUrl(url);
}

// Evento que llama la funcion getUrl()	cuando dan clic en planetas
planetas.onclick = function(event) {
	var url = 'https://swapi.co/api/planets';
	getUrl(url);
}

// Evento que llama la funcion getUrl()	cuando dan clic en naves
naves.onclick = function(event) {
	var url = 'https://swapi.co/api/starships';
	getUrl(url);
}

// Evento que llama la funcion getUrl()	cuando dan clic en vehiculos
vehiculos.onclick = function(event) {
	var url = 'https://swapi.co/api/vehicles';
	getUrl(url);
}

function onError(url){
	console.log(`Error al cargar url ${url}`)
}

const opts = { crossDomain: true }

function obtenerLista(url){
	return new Promise (( resolve, reject) => {
		$
		.get(url, opts, function(data){
			resolve(data)
		})
		.fail(()=> reject(url))
	})
}


async function getDetalleLista(lista){
	var promesas = lista.map(url => obtenerLista(url))
	try {
		var listado = await Promise.all(promesas)
		tbody_lista.innerHTML = ''
		listado.forEach(element => {
			var tr = document.createElement('tr')
			tr.innerHTML = `
					<th scope="row">
						${element.name}
					</th>
					`;
		tbody_lista.appendChild(tr);
		});

	} catch(url) {
		onError(url)
	}
}

function getPeticion(url,render, callback){
	var httpR = new XMLHttpRequest();
	httpR.onreadystatechange = function(){
		if(this.readyState==4&& this.status==200){
			
			renderDetallePelicula(JSON.parse(this.responseText));
			
			// renderDetallePlanetas(JSON.parse(this.responseText));
			if(callback){
				callback();
			}
		}
	}
	httpR.open('GET',url,true);
	httpR.send();
}

function renderDetallePelicula(data){
	detalle.innerHTML = data.title
	title_film.innerHTML = data.title;
	episode_id.innerHTML = 'Episodio: ' + data.episode_id;
	opening_crawl.innerHTML = data.opening_crawl;
	director.innerHTML = 'Director: ' + data.director;
	producer.innerHTML = 'Producida por: ' + data.producer;
	release_date.innerHTML = 'Fecha de Lanzamiento: ' + data.release_date;
	getDetalleLista(data.characters);
}

// function renderDetallePlanetas(data){
// 	detalle.innerHTML = data.title
// 	title_film.innerHTML = data.title;
// 	episode_id.innerHTML = 'Episodio: ' + data.episode_id;
// 	opening_crawl.innerHTML = data.opening_crawl;
// 	director.innerHTML = 'Director: ' + data.director;
// 	producer.innerHTML = 'Producida por: ' + data.producer;
// 	release_date.innerHTML = 'Fecha de Lanzamiento: ' + data.release_date;
// 	getDetalleLista(data.planets);
// }

// detail_person_film.onclick = function(event){
// 	getPeticion(detalle_film_url,renderDetallePelicula,function(){
// 		swal({
// 			type: 'success',
// 			title: 'Carga personajes completa!',
// 			showConfirmButton: false,
// 			timer: 3000
// 		})
// 	});
// 	document.getElementById('detail_person_film').setAttribute('class','nav-link active')
// 	document.getElementById('detail_planet_film').setAttribute('class','nav-link')
// 	document.getElementById('detail_species_film').setAttribute('class','nav-link')
// 	document.getElementById('detail_naves_film').setAttribute('class','nav-link')
// 	document.getElementById('detail_vehiculos_film').setAttribute('class','nav-link')
// }

// detail_planet_film.onclick = function(event){
// 	getPeticion(detalle_film_url,renderDetallePlaneta,function(){
// 		swal({
// 			type: 'success',
// 			title: 'Carga planetas completa!',
// 			showConfirmButton: false,
// 			timer: 3000
// 		})
// 	});
// 	document.getElementById('detail_person_film').setAttribute('class','nav-link')
// 	document.getElementById('detail_planet_film').setAttribute('class','nav-link active')
// 	document.getElementById('detail_species_film').setAttribute('class','nav-link')
// 	document.getElementById('detail_naves_film').setAttribute('class','nav-link')
// 	document.getElementById('detail_vehiculos_film').setAttribute('class','nav-link')
// }













