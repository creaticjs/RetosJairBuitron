// Bloque de varaibles
var letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s", "t", "u","v","w","x","y","z"];
var aleatorio = Math.round(Math.random() * (5 - 1) + 1);
var errores = 0;
var puntuacion = 0;
var preguntas = [
    {
    'clave' : 'Animal Domestico', 
    'respuesta': ['c','a','n','a','r','i','o'], 
    'espacios':["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ "]
    },
    {
        'clave' : 'Capital de Colombia', 
        'respuesta': ['b','o','g','o','t','a'], 
        'espacios':["_ ", "_ ", "_ ", "_ ", "_ ", "_ "]
    },
    {
        'clave' : 'Lenguaje del BootCamp Popayan', 
        'respuesta': ['j','a','v','a','s','c','r','i','p','t'], 
        'espacios':["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_"]
    }, 
    {
        'clave' : 'Ciudad blanca de Colombia', 
        'respuesta': ['p','o','p','a','y','a','n'], 
        'espacios':["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_"]
    },
    {
        'clave' : 'Animal que contiene todas las vocales', 
        'respuesta': ['m','u','r','c','i','e','l','a','g','o'], 
        'espacios':["_ ", "_ ", "_ ", "_ ", "_ ", "_ ", "_", "_", "_", "_"]
    },
    
]
var ahorcado = ['1', '2', '3', '4', '5', '6']; 

$(function (){
    $('#clave').append(preguntas[aleatorio - 1].clave);
    $('#espacios').append(preguntas[aleatorio - 1].espacios);

    $.each(letras, function(i, l) {
        $("#abc").append('<button class="btn" data-indice="'+i+'" id="letra'+i+'">'+ l +'</button>')
    });

    $(".btn").on("click", function(){
        var cambio = []
        var cod = $(this).data('indice');
        var letra = letras[cod];
        var espacio = preguntas[aleatorio-1].espacios
        var respuestas = preguntas[aleatorio-1].respuesta
        var longitud = respuestas.length;
        var fallo = 0;
        var punto = 1;

        for(var r=0;r<longitud;r++){
            if(letra == respuestas[r]) {
                cambio.push(r);
            }
        }
        // Agrega letra que esta en la respuesta a una lista temporal
        for(var j=0;j<longitud;j++){
            espacio[cambio[j]] = letra;
            $('#espacios').text(espacio);
        }

        // Deshabilita una letra si es o no correcta
        if(cambio.length==0){
            $('#letra'+cod).addClass('disabled');
            var imagen = 'img/'+ahorcado[errores]+'.png';
            $('#ahorcado').attr('src',imagen);
            fallo+=1;
        }else{
            $('#letra'+cod).addClass('disabled');
            $('#puntaje').text(puntuacion);
            punto+=1; 
        }
        puntuacion = puntuacion + punto;
        errores = errores + fallo;
        // Verifica si perdio
        if(errores>=6){
            $.each(letras, function(i, l) {
                $('#letra'+i).addClass('disabled');
            });
            $("#gp").text('Perdiste! intenta de nuevo');
        }
       
        // Verifica si gano el usuario
        if(espacio.length==respuestas.length && espacio.every(function(v,i) { return v === respuestas[i] })){
            $.each(letras, function(i, l) {
                $('#letra'+i).addClass('disabled');
            });
            $("#gp").text('Felicitaciones Ganaste!');
        }
    });
    // recargar pagina
    $('#reset').on("click", function(){
        location.reload();
    });    
}); // cierro ready