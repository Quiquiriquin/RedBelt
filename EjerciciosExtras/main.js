const request = require('request');
            //------------------- 

var cambiar = document.getElementById('btn');
var caja = document.getElementById('contenedor');

function cambiarFondo () {
    request.get('https://api.nasa.gov/planetary/apod?api_key=SoiSEH6KNr2YBQ9pJWSynLkhPAyXYJtRjkmGu44x', (error,response,body)=>{
        let img = JSON.parse(body).url;
        console.log(img);
        caja.style.backgroundImage.url = img;
    });
}

cambiar.addEventListener('click',cambiarFondo);