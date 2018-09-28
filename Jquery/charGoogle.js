var gobal = [];
$(function(){
    $.ajax({
        type: "GET",
        url: "https://restcountries.eu/rest/v2/region/asia",
        dataType: "JSON"
    }).done(function(data){
        google.charts.load('current', {'packages':['bar']});
        google.charts.setOnLoadCallback(drawStuff);
        let arregloDatos = [['Codigo', 'Poblacion']];
        data.forEach(element => {
            let poblacion = []
            // alpha2Code
            poblacion.push(element.name);
            poblacion.push(element.population);
            arregloDatos.push(poblacion);
        });
        gobal = arregloDatos;
        
        function drawStuff() {
            var data = google.visualization.arrayToDataTable(arregloDatos, false);
            var options = {
                width: 900,
                backgroundColor: '#81d4fa',
                defaultColor: '#f5f5f5',
                colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
                legend: { 
                    position: 'none' 
                },
                chart: {
                  title: 'Millones de habitantes',
                  subtitle: 'Europa' 
                },
                axes: {
                  x: {
                    0: { side: 'top', label: 'Paises'} // Top x-axis.
                  }
                },
                bar: { groupWidth: "100%" }
            };
            var chart = new google.charts.Bar(document.getElementById('top_x_div'));
            // Convert the Classic options to Material options.
            chart.draw(data, google.charts.Bar.convertOptions(options));
        }
    }).fail(function(){
        alert("Error..")
    }).always(function(){
    });
    google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
       
        var data = google.visualization.arrayToDataTable(gobal, false);

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }

    }) // cierra ready
    