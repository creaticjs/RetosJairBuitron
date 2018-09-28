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
    renderPaises('https://restcountries.eu/rest/v2/regionalbloc/eu');
}) // cierra ready

function renderPaises(url){
    $.ajax({
        type: "GET",
        url: url,   
        dataType: "JSON"
    }).done(function(data){
        paisesTabla.innerHTML = '';
        data.forEach(element => {
            var tr = document.createElement('tr');
            tr.innerHTML = 
            `<td><img src="${element.flag}" alt="" width="55" height="40"></td>
             <td>${element.name}</td>
             <td>${element.capital}</td>
             <td><button type="button" id="${element.alpha2Code}"class="btn btn-info">Ver</button></td>`
            paisesTabla.appendChild(tr);
        });
    }).fail(function(){
        alert("Error..")
    }).always(function(){
    
    });
    } //cierro funcion renderPaises
    $(continentes).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/region/africa'; 
        renderPaises(url)
    });

    $(regiones).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/eu'; 
        renderPaises(url)
    });
    

    $(EU).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/eu'; 
        renderPaises(url)
        dropdown_regiones.html('Union Europea');
    });

    $(CARICOM).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/caricom'; 
        renderPaises(url)
        dropdown_regiones.html('Comunidad del Caribe');
    });
    
    $(PA).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/pa'; 
        renderPaises(url)
        dropdown_regiones.html('Alianza Pacifica');
    });

    $(AU).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/au'; 
        renderPaises(url)
        dropdown_regiones.html('Union Africana');
    });

    $(USAN).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/usan'; 
        renderPaises(url)
        dropdown_regiones.html('Union de Naciones Suramericanas');
    });

    $(AL).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/al'; 
        renderPaises(url)
        dropdown_regiones.html('Liga Arabe');
    });

    $(ASEAN).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/asean'; 
        renderPaises(url)
        dropdown_regiones.html('Asociacion de Naciones del Sudeste Asiatico');
    });
    
    $(CAIS).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/cais'; 
        renderPaises(url)
        dropdown_regiones.html('Sistema de Integracion Centroamericana');
    });

    $(CEFTA).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/cefta'; 
        renderPaises(url)
        dropdown_regiones.html('Acuerdo de Libre Comercio de Europa Central');
    });

    $(NAFTA).on( "click", function() {
        url = 'https://restcountries.eu/rest/v2/regionalbloc/nafta'; 
        renderPaises(url)
        dropdown_regiones.html('Tratado de Libre Comercio Norteamericano');
    });
    

