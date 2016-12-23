function pronto(){
    window.addEventListener('push', ratchetPronto);
    var paginaAtual = "";
    document.getElementById("hospitais").addEventListener("click", definirPagina("hospitais"), false);
    document.getElementById("delegacias").addEventListener("click", definirPagina("delegacias"), false);
    document.getElementById("pontosTuristicos").addEventListener("click", definirPagina("pontosTuristicos"), false);
    document.getElementById("praias").addEventListener("click", definirPagina("praias"), false);
    document.getElementById("ondeComer").addEventListener("click", definirPagina("ondeComer"), false);
    document.getElementById("ondeDormir").addEventListener("click", definirPagina("ondeDormir"), false);
    document.getElementById("eventos").addEventListener("click", definirPagina("eventos"), false);
    document.getElementById("banheiros").addEventListener("click", definirPagina("banheiros"), false);

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