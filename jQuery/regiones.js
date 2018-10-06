var global = []
var url = '';
var continentes = $("#continetes");
var regiones = $("#regiones");
//Variables gobales regiones
var dropdown_regiones = $("#dropdown_regiones");
var EU = $('#EU');
var CARICOM = $('#CARICOM');
var PA = $('#PA');
var AU = $('#AU');
var USAN = $('#USAN');
var AL = $('#AL');
var ASEAN = $('#ASEAN');
var CAIS = $('#CAIS');
var CEFTA = $('#CEFTA');
var NAFTA = $('#NAFTA');
$(function(){
    renderPaises('https://restcountries.eu/rest/v2/regionalbloc/eu', '150');
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
        renderPaises(url, '150')
    });
    

    $(EU).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/eu'; 
        renderPaises(url, '150')
        dropdown_regiones.html('Union Europea');
    });

    $(CARICOM).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/caricom'; 
        renderPaises(url, '029')
        dropdown_regiones.html('Comunidad del Caribe');
    });
    
    $(PA).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/pa'; 
        renderPaises(url, '005')
        dropdown_regiones.html('Alianza Pacifica');
    });

    $(AU).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/au'; 
        renderPaises(url, '002')
        dropdown_regiones.html('Union Africana');
    });

    $(USAN).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/usan'; 
        renderPaises(url, '005')
        dropdown_regiones.html('Union de Naciones Suramericanas');
    });

    $(AL).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/al'; 
        renderPaises(url, '145')
        dropdown_regiones.html('Liga Arabe');
    });

    $(ASEAN).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/asean'; 
        renderPaises(url, '035')
        dropdown_regiones.html('Asociacion de Naciones del Sudeste Asiatico');
    });
    
    $(CAIS).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/cais'; 
        renderPaises(url, '013')
        dropdown_regiones.html('Sistema de Integracion Centroamericana');
    });

    $(CEFTA).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/cefta'; 
        renderPaises(url, '150')
        dropdown_regiones.html('Acuerdo de Libre Comercio de Europa Central');
    });

    $(NAFTA).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/nafta'; 
        renderPaises(url, '021')
        dropdown_regiones.html('Tratado de Libre Comercio Norteamericano');
    });
    

