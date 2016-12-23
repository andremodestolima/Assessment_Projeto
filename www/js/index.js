function pronto(){
    window.addEventListener('push', ratchetPronto);
    window.PUSH = PUSH;
    var paginaAtual = "";
    var conteudo = JSON.stringify("visitario.json");
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
            alert(JSON.stringify("visitario.json").hospitais);
            //        if (paginaAtual == "hospitais" )


           // document.getElementById("conteudoLista").innerHTML =
        }

    }
}

document.addEventListener('deviceready', pronto, false);