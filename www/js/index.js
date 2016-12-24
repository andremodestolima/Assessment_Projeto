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
                infos += "<li class='table-view-cell media'><img class='media-object pull-left' src='";
                infos += atual[i].foto;
                infos += "' height='110px' width='110px' ><div class='media-body'>";
                infos += atual[i].nome;
                if(atual[i].bairro){ infos += "<p><b>Bairro:</b> " + atual[i].bairro +"</p>" }
                if(atual[i].endereco){ infos += "<p><b>Endereco:</b> " + atual[i].endereco +"</p>" }
                if(atual[i].regiao){ infos += "<p><b>Região:</b> " + atual[i].regiao +"</p>" }
                if(atual[i].mapa){ infos += "<p><a href=" + atual[i].mapa + "> Veja onde fica! </a></p>"}
                if(atual[i].funcionamento){ infos += "<br/><p><b>Horário:</b> " + atual[i].funcionamento +"</p>" }
                if(atual[i].servico){ infos += "<p><b>Serviço:</b> " + atual[i].servico +"</p>" }
                if(atual[i].custo){ infos += "<p><b>Custo:</b> " + atual[i].custo +"</p>" }
                if(atual[i].telefone){ infos += "<p><b>Telefone:</b> " + atual[i].telefone +"</p>" }
                if(atual[i].url){ infos += "<p><b><a href=" + atual[i].url + ">" + atual[i].site + "</a></b></p>"}
                infos += "</div></li>";
            }
            infos += "</ul>";
            document.getElementById("conteudoLista").innerHTML = infos;
        }
    }
}

document.addEventListener('deviceready', pronto, false);