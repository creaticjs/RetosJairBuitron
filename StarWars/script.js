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

// Funcion que inicializa la seccion se muestra y las que van a estar ocultas
window.onload = function(){
    seccion_peliculas.style.display = (seccion_peliculas.style.display == 'none') ? 'none' : 'none';
	seccion_personajes.style.display = (seccion_personajes.style.display == 'none') ? 'none' : 'none';
	seccion_especies.style.display = (seccion_especies.style.display == 'none') ? 'none' : 'none';
}

// Variables globales
var seccion_inicio = document.getElementById('seccion_inicio');
var seccion_peliculas = document.getElementById('seccion_peliculas');
var seccion_personajes = document.getElementById('seccion_personajes');
var seccion_especies = document.getElementById('seccion_especies');

// var peliculas = document.getElementById('peliculas');
// var tbodypelicula = document.getElementById('tbodypelicula')
// var personfilm = document.getElementById('personfilm')
// var lista_personajes = document.getElementById('lista_personajes')


datosConsulta = {};
// Funcion principal encargada de hacer las peticiones a SWAPI
// recibe como argumento una url
function getUrl(url){
	var peticion  = new  XMLHttpRequest();
	peticion.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			datosConsulta = JSON.parse(this.responseText);
			var lista = datosConsulta.results;
			if(url == 'https://swapi.co/api/films'){
				seccion_inicio.style.display = (seccion_inicio.style.display == 'none') ? 'none' : 'none';
				seccion_personajes.style.display = (seccion_personajes.style.display == 'none') ? 'none' : 'none';
				seccion_especies.style.display = (seccion_especies.style.display == 'none') ? 'none' : 'none';
				seccion_peliculas.setAttribute('style','diplay : activate');
				pintarPelicula(lista);
			}
			if(url == 'https://swapi.co/api/people'){
				seccion_inicio.style.display = (seccion_inicio.style.display == 'none') ? 'none' : 'none';
				seccion_peliculas.style.display = (seccion_peliculas.style.display == 'none') ? 'none' : 'none';
				seccion_especies.style.display = (seccion_especies.style.display == 'none') ? 'none' : 'none';
				seccion_personajes.setAttribute('style','diplay : activate');
				pintarPersonaje(lista);
			}
			if(url == 'https://swapi.co/api/species'){
				seccion_inicio.style.display = (seccion_inicio.style.display == 'none') ? 'none' : 'none';
				seccion_peliculas.style.display = (seccion_peliculas.style.display == 'none') ? 'none' : 'none';
				seccion_personajes.style.display = (seccion_personajes.style.display == 'none') ? 'none' : 'none';
				seccion_especies.setAttribute('style','diplay : activate');
				pintarEspecie(lista);
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
			img = '<img src="'+ i.url +'" width="120" height="60"></img>';
		}
	}
	return img;	
}

// Funcion que crea la tabla con la lista de peliculas
function pintarPelicula(lista){
	tbodypelicula.innerHTML = '';
    lista.forEach(element => {
		console.log(element.episode_id);
        var tr = document.createElement('tr');
		var td = `<td>${buscarFilm(element.episode_id,films)}</td>`;
		console.log(td);
		tr.innerHTML = `${td}
						<th scope="row">${element.title}</th>
						<td>
							<a href="#" onclick=${detallePelicula(element.opening_crawl, element.characters, element.planets, element.starships, element.vehicles, element.species)}>ver</a>
						</td>`;
		tbodypelicula.appendChild(tr);
	});

	function detallePelicula(opening, personajes, planetas, naves, vehiculos, especies){
		console.log("llego")
	}
}

// Funcion que crea la tabla con la lista de personajes
function pintarPersonaje(lista){
	tbodypersonaje.innerHTML = '';
    lista.forEach(element => {
        var tr = document.createElement('tr');
		// var td = `<td>${buscarFilm(element.episode_id,films)}</td>`;
		tr.innerHTML = `
						<th scope="row">${element.name}</th>
						<td>
							<a href="#">ver</a>
						</td>`;
		tbodypersonaje.appendChild(tr);
	});
}

// Funcion que crea la tabla con la lista de especies
function pintarEspecie(lista){
	tbodyespecie.innerHTML = '';
    lista.forEach(element => {
        var tr = document.createElement('tr');
		// var td = `<td>${buscarFilm(element.episode_id,films)}</td>`;
		tr.innerHTML = `
						<th scope="row">${element.name}</th>
						<td>
							<a href="#">ver</a>
						</td>`;
		tbodyespecie.appendChild(tr);
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
especies.onclick = function(event) {
	var url = 'https://swapi.co/api/species';
	getUrl(url);
}






