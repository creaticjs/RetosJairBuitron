var btnChat = document.getElementById('btnChat');
var btnInput = document.getElementById('btnInput');
var msnChat = document.getElementById('msnChat');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDRvItS4HgluWXBcfqsCuhfI-cmSLxy4P8",
    authDomain: "bootcamp-10ebb.firebaseapp.com",
    databaseURL: "https://bootcamp-10ebb.firebaseio.com",
    projectId: "bootcamp-10ebb",
    storageBucket: "bootcamp-10ebb.appspot.com",
    messagingSenderId: "684250874542"
};

firebase.initializeApp(config);

var dataBase = firebase.database().ref("chat");

dataBase.on('child_added', function(data){
    console.log(data.val());
    var msn = data.val();
    var li = document.createElement("li");
        var d = new Date();
        li.innerHTML = `
        <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" />
            <div class="chat-body clearfix">
                <div class="header">
                <small class=" text-muted"><span class="glyphicon glyphicon-time"></span>${d.getHours() +':'+ d.getMinutes()}</small>
                    <strong class="pull-right primary-font">Jairnet</strong>
                </div>
                <p>
                    ${msn}
                </p>
            </div>`
        msnChat.appendChild(li);
        btnInput.value = '';
        btnInput.focus();
        // sendMsn(msn)
})

function structMsn(msn){
    var long = msn.length;
    if(long>=1){
        var li = document.createElement("li");
        var d = new Date();
        li.innerHTML = `
        <img src="http://placehold.it/50/FA6F57/fff&text=ME" alt="User Avatar" class="img-circle" />
            <div class="chat-body clearfix">
                <div class="header">
                <small class=" text-muted"><span class="glyphicon glyphicon-time"></span>${d.getHours() +':'+ d.getMinutes()}</small>
                    <strong class="pull-right primary-font">Jairnet</strong>
                </div>
                <p>
                    ${msn}
                </p>
            </div>`
        msnChat.appendChild(li);
        btnInput.value = '';
        btnInput.focus();
        sendMsn(msn)
    }else{
        // alert('Escribe algun texto antes de enviar!!!');
        swal({
            type: 'error',
            title: 'Escribe algun texto antes de enviar!',
            // showConfirmButton: false,
            // timer: 3000
        })
    }
}

function sendMsn(msn){
    dataBase.push(msn);
}


function pulsar(e) {
    var msn = btnInput.value;
    if (e.keyCode === 13) {
        structMsn(msn);
    }
}

btnChat.onclick = function(event){
    var msn = btnInput.value;
    structMsn(msn);
}




