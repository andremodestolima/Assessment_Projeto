function pronto(){
    window.addEventListener('push', ratchetPronto);
    window.PUSH = PUSH;
    var paginaAtual = "";
    document.getElementById("hospitais").addEventListener("click", function(){novaPagina("hospitais")}, false);
    document.getElementById("delegacias").addEventListener("click", function(){novaPagina("delegacias")}, false);
    document.getElementById("pontosTuristicos").addEventListener("click", function(){novaPagina("pontosTuristicos")}, false);
    document.getElementById("praias").addEventListener("click", function(){novaPagina("praias")}, false);
    document.getElementById("ondeComer").addEventListener("click", function(){novaPagina("ondeComer")}, false);
    document.getElementById("ondeDormir").addEventListener("click", function(){novaPagina("ondeDormir")}, false);
    document.getElementById("eventos").addEventListener("click", function(){novaPagina("eventos")}, false);
    document.getElementById("banheiros").addEventListener("click", function(){novaPagina("banheiros")}, false);

    function novaPagina(qual){
        paginaAtual = qual;
        window.PUSH({url: 'lista.html', transition: 'slide-in'});
    }

    function ratchetPronto(){
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/index.html'){
            document.getElementById("hospitais").addEventListener("click", function(){novaPagina("hospitais")}, false);
            document.getElementById("delegacias").addEventListener("click", function(){novaPagina("delegacias")}, false);
            document.getElementById("pontosTuristicos").addEventListener("click", function(){novaPagina("pontosTuristicos")}, false);
            document.getElementById("praias").addEventListener("click", function(){novaPagina("praias")}, false);
            document.getElementById("ondeComer").addEventListener("click", function(){novaPagina("ondeComer")}, false);
            document.getElementById("ondeDormir").addEventListener("click", function(){novaPagina("ondeDormir")}, false);
            document.getElementById("eventos").addEventListener("click", function(){novaPagina("eventos")}, false);
            document.getElementById("banheiros").addEventListener("click", function(){novaPagina("banheiros")}, false);
        }
        if (document.location.href.substring(document.location.href.lastIndexOf('/')) == '/lista.html'){
            function filtrar(key, value){
                if (key == "hospitais"){
                    return key;
                }
                return undefined;
            }
            document.getElementById("conteudoLista").innerHTML = JSON.stringify(visitario.json);
        }
    }
}

document.addEventListener('deviceready', pronto, false);