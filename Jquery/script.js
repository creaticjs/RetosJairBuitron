var gobal = [];
var url = '';
var continentes = $("#continentes");
var regiones = $("#regiones");
//Variables gobales continentes
var africa = $('#africa');
var americas = $('#americas');
var asia = $('#asia');
var europe = $('#europe');
var oceania = $('#oceania');

$(function(){
    renderPaises('https://restcountries.eu/rest/v2/region/africa', '002');
}) // cierra ready

function renderPaises(url, codigo){
    var region = codigo;
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
            poblacion.push(element.name);
            poblacion.push(element.population);
            arregloDatos.push(poblacion);
        });
        gobal = arregloDatos;
        function drawRegionsMap(arregloDatos, region) {
            var data = google.visualization.arrayToDataTable(global, false);
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


    }).fail(function(){
        alert("Error..")
    }).always(function(){
    
    });
    } //cierro funcion renderPaises

    $(continentes).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/region/africa'; 
        renderPaises(url, '')
    });

    $(regiones).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/eu'; 
        renderPaises(url, '')
    });

    $(africa).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/region/africa'; 
        renderPaises(url, '')
        africa.attr('class', 'nav-link active')
        americas.attr('class', 'nav-link')
        asia.attr('class', 'nav-link')
        europe.attr('class', 'nav-link')
        oceania.attr('class', 'nav-link')
    });

    $(americas).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/region/americas'; 
        renderPaises(url, '')
        africa.attr('class', 'nav-link')
        americas.attr('class', 'nav-link active')
        asia.attr('class', 'nav-link')
        europe.attr('class', 'nav-link')
        oceania.attr('class', 'nav-link')
    });

    $(asia).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/region/asia'; 
        renderPaises(url, '')
        africa.attr('class', 'nav-link')
        americas.attr('class', 'nav-link')
        asia.attr('class', 'nav-link active')
        europe.attr('class', 'nav-link')
        oceania.attr('class', 'nav-link')
    });

    $(europe).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/region/europe'; 
        renderPaises(url, '')
        africa.attr('class', 'nav-link')
        americas.attr('class', 'nav-link')
        asia.attr('class', 'nav-link')
        europe.attr('class', 'nav-link active')
        oceania.attr('class', 'nav-link')
    });

    $(oceania).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/region/oceania'; 
        renderPaises(url, '')
        africa.attr('class', 'nav-link')
        americas.attr('class', 'nav-link')
        asia.attr('class', 'nav-link')
        europe.attr('class', 'nav-link')
        oceania.attr('class', 'nav-link active')
    });
    

