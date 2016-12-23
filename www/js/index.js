function pronto(){
    window.addEventListener('push', ratchetPronto);
    function ratchetPronto(){
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/index.html'){
            alert(pag1 !!);
        }
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/lista.html'){
            alert(pag2 !!);
        }



        document.getElementById("hospitais").addEventListener("click", irHospitais, false);


    }
}

document.addEventListener('deviceready', pronto, false);