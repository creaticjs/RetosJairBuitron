var card = document.getElementById('card');
var tabla = document.getElementById('tabla');
var BotonSeguidores = document.getElementById('BotonSeguidores');
var Boton = document.getElementById('Boton');

window.onload = function(){
    card.style.display = (card.style.display == 'none') ? 'block' : 'none';
    tabla.style.display = (tabla.style.display == 'none') ? 'block' : 'none';
}

var datosperfil={};
var datosrepositorio={};
        function getRequestGit(){
            var peticion  = new  XMLHttpRequest();
            var peticionDos  = new  XMLHttpRequest();
            peticion.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    card.setAttribute('style','diplay : activate');
                    datosperfil = JSON.parse(this.responseText)
                    document.getElementById('nombre').innerHTML = datosperfil.name;
                    document.getElementById('bio').innerHTML = datosperfil.bio;
                    var imagen=document.getElementById('avatar');
                    imagen.setAttribute('src',datosperfil.avatar_url);
                    document.getElementById('reposPublicos').innerHTML = datosperfil.public_repos;
                    document.getElementById('followers').innerHTML = datosperfil.followers;
                    document.getElementById('following').innerHTML = datosperfil.following;
                    console.log(datosperfil.repos_url);
                    // document.getElementById("renderajax").innerHTML = this.responseText;
                } 
            }

            peticionDos.onreadystatechange = function(){
                if (this.readyState == 4 && this.status == 200) {
                    datosrepositorio = JSON.parse(this.responseText)
                    tabla.setAttribute('style','diplay : activate');
                    var repos = document.getElementById('repos')
                    datosrepositorio.forEach(element => {
                        var tr = document.createElement('tr');
                        tr.innerHTML = '<th scope="row">'+element.id+'</th>' + 
                        '<td>'+element.name+'</td>' + 
                        '<td><a href="'+element.html_url+'">'+element.full_name+'</td>';
                        repos.appendChild(tr);
                    });
                } 
            
            }

            peticion.open('GET','https://api.github.com/users/jairnet',true);
            peticion.send();
            peticionDos.open('GET','https://api.github.com/users/jairnet/repos', true);
            peticionDos.send();
        }


    Boton.onclick = function(){
        swal({
            title: 'Error!',
            text: 'Do you want to continue',
            type: 'error',
            confirmButtonText: 'Cool'
          })
    }
        
        
           
            
       