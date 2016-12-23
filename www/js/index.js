function pronto(){
    window.addEventListener('push', ratchetPronto);
    var paginaAtual = "";
    document.getElementById("hospitais").addEventListener("click", function(){paginaAtual = "hospitais"}, false);
    document.getElementById("delegacias").addEventListener("click", function(){paginaAtual ="delegacias"}, false);
    document.getElementById("pontosTuristicos").addEventListener("click", function(){paginaAtual ="pontosTuristicos"}, false);
    document.getElementById("praias").addEventListener("click", function(){paginaAtual ="praias"}, false);
    document.getElementById("ondeComer").addEventListener("click", function(){paginaAtual ="ondeComer"}, false);
    document.getElementById("ondeDormir").addEventListener("click", function(){paginaAtual ="ondeDormir"}, false);
    document.getElementById("eventos").addEventListener("click", function(){paginaAtual ="eventos"}, false);
    document.getElementById("banheiros").addEventListener("click", function(){paginaAtual ="banheiros"}, false);

    function ratchetPronto(){
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/index.html'){

        }
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/lista.html'){
            alert(paginaAtual);
        }

    }
}

document.addEventListener('deviceready', pronto, false);