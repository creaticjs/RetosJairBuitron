// las variables empiezan por minusculas y si es compuesta sigue con mayuscula
var selEquipos = document.getElementById('equipos');
var nombreEquipo = document.getElementById('equipo');
var imagen = document.getElementById('imagen');
var estrella = document.getElementById('estrellas');
var resena = document.getElementById('descripcion');
var estadio = document.getElementById('estadio');
var jugadoresLista = document.getElementById('jugadores');
var entrenador = document.getElementById('entrenador');
var web = document.getElementById('web');
var ligaA = document.getElementById('ligaA');
var linkA = document.getElementById('linkA');
var linkB = document.getElementById('linkB');
var linkT = document.getElementById('linkT');
var todas = document.getElementById('botonTodas');
var todasT = document.getElementById('todas');
var datosLigas = document.getElementById('datosLigas');
var ordenClub = document.getElementById('ordenClub');
var ordenPuntos = document.getElementById('ordenPuntos');

// SetData Equipos de primera A, cada objeto compuesto por:
// {nombre, estrellas, urlImagen, entenador, web, jugadores, descripcion}
var dataEquipos = [
    {
        nombre: "Atlético Nacional",
        estrellas: "16",
        urlImagen: "https://cdn.colombia.com/images/futbol/equipos/180x180/colombia/atletico-nacional.jpg",
        estadio: "<strong>Estadio </strong>Atanasio Girardot",
        entrenador: "<strong>Entrenador </strong>Jorge Almirón",
        web: "https://www.atlnacional.com.co",
        jugadores: ['A Ramires', 'F. Monetti', 'A. Henríquez', 'C. Vargas', 'F. Aguilar', 'G. Torres',
                    'D. Moreno', 'D. Braghieri', 'V. Hernández'],
        descripcion: "<strong>Descripcion</strong><br>El Atlético Nacional S. A.,1​ mejor conocido como Atlético Nacional, o simplemente Nacional, es un club de fútbol de la ciudad de Medellín, Colombia, fundado el 7 de marzo de 1947 bajo el nombre de Club Atlético Municipal de Medellín, aunque por escritura pública esta sociedad fue constituida el 30 de abril de 1947 en la notaría primera de Medellín. En 1950, el expresidente de la Liga Antioqueña de fútbol, Luis Alberto Villegas, cambió el nombre del club por Club Atlético Nacional.13​ El club participa en la máxima categoría de la División Mayor del Fútbol Colombiano, la Categoría Primera A desde su fundación en 1948, siendo uno de los tres únicos equipos que ha participado en todos sus torneos, junto a Millonarios y Santa Fe.14​"
    },
    {
        nombre: "América de Cali",
        estrellas: "13",
        urlImagen: "https://cdn.colombia.com/images/futbol/equipos/180x180/colombia/america-de-cali.jpg",
        estadio: "<strong>Estadio </strong>Olímpico Pascual Guerrero",
        entrenador: "<strong>Entrenador </strong>Pedro Felipe Da Cruz Felicio Santos",
        web: "https://www.america.com.co",
        jugadores: ['A Ramires', 'F. Monetti', 'A. Henríquez', 'C. Vargas', 'F. Aguilar', 'G. Torres',
                    'D. Moreno', 'D. Braghieri', 'V. Hernández'],
        descripcion: "<strong>Descripcion</strong><br>El América de Cali S. A., conocido como América de Cali o simplemente América, es un club de fútbol colombiano de la ciudad de Cali. Es considerado uno de los clubes más grandes y populares de Colombia y uno de los más importantes de América del Sur.10​ Fue fundado el domingo 13 de febrero de 1927. Disputa sus partidos en el Estadio Olímpico Pascual Guerrero y el color que identifica al club desde sus inicios ha sido el rojo escarlata."
    },
    {
        nombre: "Millonarios",
        estrellas: "15",
        urlImagen: "https://cdn.colombia.com/images/futbol/equipos/180x180/colombia/millonarios.jpg",
        estadio: "<strong>Estadio </strong>Nemesio Camacho El Campín",
        entrenador: "<strong>Entrenador </strong>Miguel Ángel Russo",
        web: "https://www.millonarios.com.co",
        jugadores: ['A Ramires', 'F. Monetti', 'A. Henríquez', 'C. Vargas', 'F. Aguilar', 'G. Torres',
                    'D. Moreno', 'D. Braghieri', 'V. Hernández'],
        descripcion: "<strong>Descripcion</strong><br>Millonarios Fútbol Club, oficialmente Azul y Blanco Millonarios Fútbol Club S. A.1​ (antes Club Deportivo Los Millonarios), mejor conocido como Millonarios,6​ es un club de fútbol de la ciudad de Bogotá, capital de Colombia. Es uno de los clubes más laureados y emblemáticos de Colombia; de allí que sea considerado uno de los clubes más grandes del país.7​ Los orígenes del equipo se remontan hasta la década de Años 1920, pero fue empezado a llamar como Los Millonarios en el año de 1939 cuando su nombre era el Club Deportivo Municipal; oficialmente fue fundado el 18 de junio de 1946 bajo el nombre de Club Deportivo Los Millonarios y, posteriormente, como Millonarios Fútbol Club el 20 de abril de 2011 cuando fue reconstituido como Sociedad Anónima."
    },
    {
        nombre: "Deportes Tolima",
        estrellas: "2",
        urlImagen: "https://cdn.colombia.com/images/futbol/equipos/180x180/colombia/deportes-tolima.jpg",
        estadio: "<strong>Estadio </strong>Manuel Murillo Toro",
        entrenador: "<strong>Entrenador </strong>Alberto Gamero",
        web: "https://www.clubdeportestolima.com.co/",
        jugadores: ['A Ramires', 'F. Monetti', 'A. Henríquez', 'C. Vargas', 'F. Aguilar', 'G. Torres',
        'D. Moreno', 'D. Braghieri', 'V. Hernández'],
        descripcion: "<strong>Descripcion</strong><br>El Club Deportes Tolima S. A., comúnmente conocido como Deportes Tolima o Tolima, es un club de fútbol colombiano de la ciudad de Ibagué, fundado el 18 de diciembre de 1954 y juega en la Categoría Primera A del fútbol profesional colombiano. El club ha sido campeón dos veces de la máxima categoría del fútbol colombiano siendo su primer título en el Torneo Finalización 2003, venciendo en la final al Deportivo Cali por marcador de 2 a 0 en la ciudad de Ibagué y perdiendo por 3 a 1 en Cali. En series desde el punto de penal, Deportes Tolima logró ganar por 4 a 2 con gran actuación de su portero Diego Gómez en una tarde inolvidable para su afición."
    },
    {
        nombre: "Independiente Medellín",
        estrellas: "6",
        urlImagen: "https://cdn.colombia.com/images/futbol/equipos/180x180/colombia/independiente-medellin.jpg",
        estadio: "<strong>Estadio</strong>Atanasio Girardot",
        entrenador: "<strong>Entrenador </strong>Octavio Zambrano",
        web: "https://www.dimoficial.com",
        jugadores: ['A Ramires', 'F. Monetti', 'A. Henríquez', 'C. Vargas', 'F. Aguilar', 'G. Torres',
                    'D. Moreno', 'D. Braghieri', 'V. Hernández'],
        descripcion: "<strong>Descripcion</strong><br>El Deportivo Independiente Medellín, más conocido como Independiente Medellín, DIM, o simplemente Medellín, es un club de fútbol colombiano fundado bajo el nombre de «Medellín Football Club» el 14 de noviembre de 1913 por Alberto Uribe Piedrahíta. Perteneciente a la ciudad de Medellín, capital del departamento de Antioquia. Actualmente juega en la Categoría Primera A del Fútbol Profesional Colombiano. Disputa los partidos como local en el Estadio Atanasio Girardot.2​. Su propietario es el Equipo del Pueblo S. A. en cabeza de Raúl Giraldo como máximo accionista de la compañía."
    },
    {
        nombre: "Deportivo Pasto",
        estrellas: "1",
        urlImagen: "https://cdn.colombia.com/images/futbol/equipos/180x180/colombia/deportivo-pasto.jpg",
        estadio: "<strong>Estadio </strong>Departamental Libertad",
        entrenador: "<strong>Entrenador </strong>Flabio Torres",
        web: "https://www.deportivopasto.com.co",
        jugadores: ['A Ramires', 'F. Monetti', 'A. Henríquez', 'C. Vargas', 'F. Aguilar', 'G. Torres',
                    'D. Moreno', 'D. Braghieri', 'V. Hernández'],
        descripcion: "<strong>Descripcion</strong><br>La asociación Deportivo Pasto es un club de fútbol colombiano de la ciudad de San Juan de Pasto, en el departamento de Nariño. Fue fundado el 12 de octubre de 1949.1​4​ Actualmente juega en la Categoría Primera A del fútbol profesional colombiano y disputa los encuentros como local en el estadio departamental Libertad con capacidad para 28.000 espectadores."
    },
    {
        nombre: "Deportivo Cali",
        estrellas: "9",
        urlImagen: "https://cdn.colombia.com/images/futbol/equipos/180x180/colombia/deportivo-cali.jpg",
        estadio: "<strong>Estadio </strong>Deportivo Cali",
        entrenador: "<strong>Entrenador </strong>Gerardo Pelusso",
        web: "https://www.deportivocali.co",
        jugadores: ['A Ramires', 'F. Monetti', 'A. Henríquez', 'C. Vargas', 'F. Aguilar', 'G. Torres',
                    'D. Moreno', 'D. Braghieri', 'V. Hernández'],
        descripcion: "<strong>Descripcion</strong><br>El Deportivo Cali12​ es un club deportivo de la ciudad de Cali, en el departamento del Valle del Cauca, Colombia, Fundado el 23 de noviembre de 1912 como (Cali Football Club) que después de pasar por dos re-estructuraciones desde su fundación por cuestiones económicas, en el año de 1959 se constituye como asociación y es reconocida oficialmente en 1962 lo que en la actualidad es la Asociación Deportivo Cali.6​13​ El Deportivo Cali es más conocido como un club de fútbol, aunque compite en otras disciplinas como el baloncesto,14​ el tenis, la natación,15​ y futsal."
    },
];

// SetData Equipos de primera A y primera B, cada objeto compuesto por:
// {nombre, liga, puntos[]}

var ligasList = [
    {
        nombre: "La Equidad",
        liga: "A",
        puntos: [6,6,0,0,9,0,9,18]
    },
    {
        nombre: "Cucuta",
        liga: "B",
        puntos: [22,16,6,0,41,12,29,54]
    },
    {
        nombre: "Once Caldas",
        liga: "A",
        puntos: [6,5,1,0,11,4,7,16]
    },
    {
        nombre: "Union Magdalena",
        liga: "B",
        puntos: [21,12,5,4,35,14,21,41]
    },
    {
        nombre: "Junior",
        liga: "A",
        puntos: [6,4,1,1,10,3,7,13]
    },
    {
        nombre: "Deportivo Pereira",
        liga: "B",
        puntos: [21,11,5,6,31,24,7,38]
    },
    {
        nombre: "Tolima",
        liga: "A",
        puntos: [6,4,1,1,10,7,3,13]
    },
    {
        nombre: "Real Cartagena",
        liga: "B",
        puntos: [22,9,5,8,27,20,-1,32]
    }
];

/*Carga inicial donde oculta la cabecera de una tabla con el id: todasT */
window.onload = function(){
    todasT.style.display = (todasT.style.display == 'none') ? 'block' : 'none';
}

// Class equipo
class Equipo{
    constructor(nombre, liga, puntos){
        this.nombre = nombre;
        this.liga = liga;
        this.puntos = puntos;
    }
}

// Funcion que crea una lista de clases tipo Equipo
function crearEquipos(){
    var equipos = [];
    for(i of ligasList){
        equipos.push(new Equipo(i.nombre, i.liga, i.puntos));
    }
}

/*Funcion que recibe una lista y la recorre generando codigo html del tipo */
/* <tr>
        <td>Jugador 1</>
        <td>Jugador 2</>
   </tr>
*/
function jugadores(lista){
    jugadoresLista.innerHTML = '<strong>Jugadores</strong><br>'
    for(i of lista)
    {
    var tr = document.createElement('tr');
    tr.innerHTML = '<td>'+i+'</td>';
    jugadoresLista.appendChild(tr);
    }
}

/*Funcion que genera un numero de iconos de forma estrella:  */
/* <i class="class','fas fa-star text-warning"></i>
*/
function estrellas(numero){
    for(var s=0;s<numero;s++)
    {
        var i=document.createElement('i');
        i.setAttribute('class','fas fa-star text-warning');
        estrella.appendChild(i);
    }
}

/*Funcion asociada a un evento que se activa cuando se escoje un elemento de un select*/
selEquipos.onchange = function(){
    var listaJugadores = dataEquipos[this.selectedIndex].jugadores;
    jugadoresLista.innerHTML = ' ';  
    estrella.innerHTML = ' ';
    nombreEquipo.innerHTML = dataEquipos[this.selectedIndex].nombre;
    imagen.setAttribute('src', dataEquipos[this.selectedIndex].urlImagen);
    estrellas(dataEquipos[this.selectedIndex].estrellas);
    estadio.innerHTML = dataEquipos[this.selectedIndex].estadio;
    entrenador.innerHTML = dataEquipos[this.selectedIndex].entrenador;
    web.setAttribute('href', dataEquipos[this.selectedIndex].web);
    web.innerHTML = dataEquipos[this.selectedIndex].web;
    resena.innerHTML = dataEquipos[this.selectedIndex].descripcion;
    jugadores(listaJugadores);       
}

/*Funcion que recibe una lista de numeros y retorna un bloque html:  */
/*  <td>numero1</td>
    <td>numero2</td> ...
*/
function puntosFun(lista){
    var t = '';
    for(i of lista){
        t+='<td>'+i+'</td>';
    }
    return t;
}

// Funcion que filtra de acuerdo a la liga A o B
function orden(liga){
    var resultado = ligasList.filter(function(lig){
        return lig.liga == liga;
    })
    return resultado;
}

// funcion que recibe una lista y dibuja los datos en una tabla
function pintarTabla(lista){
    datosLigas.innerHTML = '';
    lista.forEach(element => {
        var tr = document.createElement('tr');
        var punto = element.puntos;
        tr.innerHTML = '<td>'+element.nombre+'</td><td>'+element.liga+'</td>' + puntosFun(punto);
        datosLigas.appendChild(tr);
    });
}

/*Funcion asociada a un evento que se activa cuando da click en un link "Todas las Ligas"  */
todas.onclick = function(event) {
    // muestra la cabecera de la tabla
    todasT.setAttribute('style','diplay : activate');
    linkA.setAttribute('class','nav-link');
    linkB.setAttribute('class','nav-link');
    linkT.setAttribute('class','nav-link active');
    pintarTabla(ligasList);
}

// Evento que al darle click pinta los datos de todas las ligas
linkT.onclick = function(event) {
    linkT.setAttribute('class','nav-link active');
    linkA.setAttribute('class','nav-link');
    linkB.setAttribute('class','nav-link');
    pintarTabla(ligasList);
}

// Evento que al darle click pinta los equipos de la categoria A
linkA.onclick = function(event) {
    linkT.setAttribute('class','nav-link');
    linkA.setAttribute('class','nav-link active');
    linkB.setAttribute('class','nav-link');
    pintarTabla(orden("A"));
}

// Evento que al darle click pinta los equipos de la categoria B
linkB.onclick = function(event) {
    linkT.setAttribute('class','nav-link');
    linkA.setAttribute('class','nav-link');
    linkB.setAttribute('class','nav-link active');
    pintarTabla(orden("B"));
}


function SorfClub(lista){
lista.sort(function(a,b){
    if(a.nombre > b.nombre)
    {
        return 1;
    }
    if(a.nombre < b.nombre)
    {
        return -1;
    }
    return 0;
})
    pintarTabla(lista);
}

function SortScore(lista){
    lista.sort(function(a,b){
        var largo = lista[0].puntos.length - 1;
        if(a.puntos[largo] < b.puntos[largo])
        {
            return 1;
        }
        if(a.puntos[largo] > b.puntos[largo])
        {
            return -1;
        }
        return 0;
    })
    
    pintarTabla(lista);
}

/*Evento que ordena de acuerdo a los puntos de tenga cada equipo*/
ordenPuntos.onclick = function(event) {
    if(linkA.getAttribute('class') == 'nav-link active')
    {
        SortScore(orden("A"));
    }
    else{
        SortScore(orden("B"))
    }
    if(linkT.getAttribute('class') == 'nav-link active')
    {
        SortScore(ligasList);
    }
};

/*Evento que ordena por club */
ordenClub.onclick = function(event) {
    if(linkA.getAttribute('class') == 'nav-link active'){
        SorfClub(orden("A"));
    } else{
        SorfClub(orden("B"));
    }

    if(linkT.getAttribute('class') == 'nav-link active')
    {
        SorfClub(ligasList);
    }
};
