// Funcion que recibe como parametro un endpoint y regresa el json como respuesta
function getUrl(url){
    var datosConsulta=[];
    var peticion  = new  XMLHttpRequest();
    peticion.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            datosConsulta = JSON.parse(this.responseText)
        }
    }
    peticion.open('GET',url,true);
    peticion.send();
}



