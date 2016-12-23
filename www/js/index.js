function pronto(){
    window.addEventListener('push', ratchetPronto);
    function ratchetPronto(){
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/index.html'){

        }
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/lista.html'){

        }



        document.getElementById("hospitais").addEventListener("click", irHospitais, false);


    }
}

document.addEventListener('deviceready', pronto, false);