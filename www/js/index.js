function pronto(){
    window.addEventListener('push', ratchetPronto);
    var paginaAtual = "";

    function definirPagina(pagina){
        paginaAtual = pagina;
    }

    function ratchetPronto(){
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/index.html'){

        }
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/lista.html'){
            alert(paginaAtual);
        }





    }
}

document.addEventListener('deviceready', pronto, false);