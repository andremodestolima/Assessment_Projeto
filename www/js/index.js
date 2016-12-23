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
                infos += "<li class='table-view-cell media'><a class='navigate-right'><img class='media-object pull-left imagemLista' src='";
                infos += atual[i].foto;
                infos += "' height='30px' width='30px' ><div class='media-body'>";
                infos += atual[i].nome;
                if(atual[i].bairro){ infos += "<p>" + atual[i].bairro +"</p>" }
                if(atual[i].endereco){ infos += "<p>" + atual[i].endereco +"</p>" }
                if(atual[i].regiao){ infos += "<p>" + atual[i].regiao +"</p>" }
                if(atual[i].funcionamento){ infos += "<p>" + atual[i].funcionamento +"</p>" }
                if(atual[i].servico){ infos += "<p>" + atual[i].servico +"</p>" }
                if(atual[i].custo){ infos += "<p>" + atual[i].custo +"</p>" }
                if(atual[i].telefone){ infos += "<p>" + atual[i].telefone +"</p>" }
                if(atual[i].url){ infos += "<p><a href=" + atual[i].url + ">" + atual[i].site + "</a></p>"}
                infos += "</div></a></li>";
            }
            infos += "</ul>";
            document.getElementById("conteudoLista").innerHTML = infos;
        }
    }
}

document.addEventListener('deviceready', pronto, false);