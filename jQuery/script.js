var global = [];
var url = '';
var continentes = $("#continentes");
var regiones = $("#regiones");
// var sec_continentes = $('sec_continentes');
var sec_continentes = document.getElementById('sec_continentes');
var sec_detalle_pais = document.getElementById('sec_detalle_pais');
// var sec_detalle_pais = $('sec_detalle_pais');
//Variables globales continentes
var africa = $('#africa');
var americas = $('#americas');
var asia = $('#asia');
var europe = $('#europe');
var oceania = $('#oceania');
var btn_buscar = $('#btn_buscar');
var region = '';
//Variables globales detalle pais
var nombre_detalle_pais = $('#nombre_detalle_pais');

$(function(){
    sec_detalle_pais.style.display = (sec_detalle_pais.style.display == 'none') ? 'none' : 'none';
    renderPaises('https://restcountries.eu/rest/v2/region/africa', '002');
}) // cierra ready

function renderDetallePais(url){
    $.ajax({
        type: "GET",
        url: url,
        dataType: "JSON"
    }).done(function(data){
        google.charts.load('current', {
            'packages': ['geochart'],
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
          });
        google.charts.setOnLoadCallback(drawMarkersMap);
        function drawMarkersMap() {
            var data = google.visualization.arrayToDataTable([
              ['Country',   'Population', 'Area Percentage'],
              ['France',  65700000, 50],
              ['Germany', 81890000, 27],
              ['Poland',  38540000, 23]
        ]);
        var options = {
            sizeAxis: { minValue: 0, maxValue: 100 },
            region: '155', // Western Europe
            displayMode: 'markers',
            colorAxis: {colors: ['#e7711c', '#4374e0']} // orange to blue
          };
        var chart = new google.visualization.GeoChart(document.getElementById('chart_detail'));
        chart.draw(data, options);
        };
        sec_continentes.style.display = (sec_continentes.style.display == 'none') ? 'none' : 'none';
        sec_detalle_pais.setAttribute('style','diplay : activate');
        nombre_detalle_pais.html(data.name)
    }).fail(function(){
        alert("Error..")
    }).always(function(){
    
    });
}

function renderPaises(url, codigo){
    var region = codigo;
    var codPais = '';
    $.ajax({
        type: "GET",
        url: url,
        dataType: "JSON"
    }).done(function(data){
        google.charts.load('current', {
            'packages':['geochart'],
            // Note: you will need to get a mapsApiKey for your project.
            // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
            'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
        });
        google.charts.setOnLoadCallback(drawRegionsMap);
        paisesTabla.innerHTML = '';
        let arregloDatos = [['Codigo', 'Poblacion']];
        data.forEach(element => {
            var tr = document.createElement('tr');
            tr.innerHTML = 
            `<td><img src="${element.flag}" alt="" width="55" height="40"></td>
             <td>${element.name}</td>
             <td>${element.capital}</td>
             <td><button type="button" id="${element.alpha2Code}"class="btn btn-info">Ver</button></td>`
            paisesTabla.appendChild(tr);
            let poblacion = []
            // alpha2Code
            poblacion.push(element.alpha2Code);
            poblacion.push(element.population);
            arregloDatos.push(poblacion);
        });
        global = arregloDatos;
        function drawRegionsMap(arregloDatos) {
            var data = google.visualization.arrayToDataTable(global, false);
            // console.log('Esta es la region:'+region);
            var options = {
            region: region, // Africa
            colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
            backgroundColor: '#81d4fa',
            datalessRegionColor: '#f8bbd0',
            defaultColor: '#f5f5f5',
        };
    
        var chart = new google.visualization.GeoChart(document.getElementById('geochart-colors'));
        chart.draw(data, options);
        };

        // Codigo que me indica sobre que boton de la lista hice click
        var la = document.querySelectorAll(".test tr button");
        la.forEach(function (data){
            data.onclick = function (){
                var detalle_pais = data.id;
                codPais = 'https://restcountries.eu/rest/v2/alpha/'+detalle_pais;
                // console.log(codPais);
                renderDetallePais(codPais);
                
        }
        // var urlPais = 'https://restcountries.eu/rest/v2/alpha/' + codPais;
        
    });
    }).fail(function(){
        alert("Error..")
    }).always(function(){
    
    });
    } //cierro funcion renderPaises

    $(continentes).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/region/africa'; 
        renderPaises(url, '002')
    });

    $(regiones).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/eu'; 
        renderPaises(url, '')
    });

    $(africa).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/region/africa'; 
        renderPaises(url, '002')
        africa.attr('class', 'nav-link active')
        americas.attr('class', 'nav-link')
        asia.attr('class', 'nav-link')
        europe.attr('class', 'nav-link')
        oceania.attr('class', 'nav-link')
    });

    $(americas).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/region/americas'; 
        renderPaises(url, '019')
        africa.attr('class', 'nav-link')
        americas.attr('class', 'nav-link active')
        asia.attr('class', 'nav-link')
        europe.attr('class', 'nav-link')
        oceania.attr('class', 'nav-link')
    });

    $(asia).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/region/asia'; 
        renderPaises(url, '142')
        africa.attr('class', 'nav-link')
        americas.attr('class', 'nav-link')
        asia.attr('class', 'nav-link active')
        europe.attr('class', 'nav-link')
        oceania.attr('class', 'nav-link')
    });

    $(europe).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/region/europe'; 
        renderPaises(url, '150')
        africa.attr('class', 'nav-link')
        americas.attr('class', 'nav-link')
        asia.attr('class', 'nav-link')
        europe.attr('class', 'nav-link active')
        oceania.attr('class', 'nav-link')
    });

    $(oceania).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/region/oceania'; 
        renderPaises(url, '009')
        africa.attr('class', 'nav-link')
        americas.attr('class', 'nav-link')
        asia.attr('class', 'nav-link')
        europe.attr('class', 'nav-link')
        oceania.attr('class', 'nav-link active')
    });
    

