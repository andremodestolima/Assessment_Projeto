function pronto(){
    window.addEventListener('push', ratchetPronto);
    window.PUSH = PUSH;
    var paginaAtual = "";
    var dadosJSON;

    jQuery.getJSON("visitario.json", function(data){
        dadosJSON = data;
    });

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
            var infos = "<ul class='table-view'>";
            var atual;
            if (paginaAtual == "hospitais"){ atual = dadosJSON.hospitais }
            else if (paginaAtual == "delegacias"){ atual = dadosJSON.delegacias }
            else if (paginaAtual == "pontosTuristicos"){ atual = dadosJSON.pontosTuristicos }
            else if (paginaAtual == "praias"){ atual = dadosJSON.praias }
            else if (paginaAtual == "ondeComer"){ atual = dadosJSON.ondeComer }
            else if (paginaAtual == "ondeDormir"){ atual = dadosJSON.ondeDormir }
            else if (paginaAtual == "eventos"){ atual = dadosJSON.eventos }
            else if (paginaAtual == "banheiros"){ atual = dadosJSON.banheiros }
            for(i=0; i<atual.length; i++ ) {
                infos += "<li class='table-view-cell media'><a class='navigate-right'><img class='media-object pull-left' src='";
                infos += atual[i].foto;
                infos += "'><div class='media-body'>";
                infos += atual[i].nome;
                infos += "<p>";
                infos += "Lorem ipsum dolor sit";
                infos += "</p></div></a></li>";
            }
            infos += "</ul>";
            document.getElementById("conteudoLista").innerHTML = infos;
        }
    }
}

document.addEventListener('deviceready', pronto, false);