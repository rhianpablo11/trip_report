
function stringTratament(){
    let listaTransporte = document.getElementById("input_list").value.toLowerCase()
    console.log(listaTransporte)
    let ida =0;
    let volta =0;
    let vespertino = 0;
    let idaVoltaAbsoluto =0;
    let idaVoltaVespertinoAbsoluto=0;
    
    listaTratada= listaTransporte.replace(/[^\w\s]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
    
    for(let i=0; i<listaTratada.length; i++){
        if(listaTratada[i]=="ida" || listaTratada[i] =="idaa" || listaTratada[i] == "vai"){
            ida++;
        }
        else if(listaTratada[i]=="volta" || listaTratada[i] == "voltando" || listaTratada[i] == "volt"){
            volta++;document.getElementById("value_ida").innerHTML = volta
        }
        else if(listaTratada[i]=="vespertino" || listaTratada[i] =="vesp"){
            vespertino++;
        }
        if(listaTratada[i]=="volta" && (listaTratada[i-2]=="ida" || listaTratada[i-1]=="ida" || listaTratada[i-2]=="vai" || listaTratada[i-1]=="vai") ){
            if((i+1)<=listaTratada.length && (listaTratada[i+1]=="vespertino" || listaTratada[i+1]=="vesp")){
                idaVoltaVespertinoAbsoluto ++;
            }
            else if((i+1)<=listaTratada.length && (listaTratada[i+1]!="vespertino" || listaTratada[i+1]!="vesp")){
                idaVoltaAbsoluto ++;
            }
        }
        
    }
    volta -= vespertino;
    document.getElementById("value_ida").innerHTML = "Ida: " + ida;
    document.getElementById("value_volta").innerHTML = "Volta matutino: "+volta;
    document.getElementById("value_vespertino").innerHTML = "Volta vespertino: "+vespertino;
    let conteudo = "\nIdas: "+ ida + "\n"+"Volta: " + volta + "\n"+ "Volta Vespertino: "+ vespertino;
    conteudo = window.encodeURIComponent(conteudo);
    document.getElementById("share_information").href = "https://api.whatsapp.com/send?text=" +"Dados da lista: "+ conteudo;
    //alert("Idas: "+ ida + "\nVolta: " + volta + "\nVolta Vespertino: "+vespertino);
    return [ida, volta, vespertino];
}

function amount_cars(quant_passageiros){
    let onibus=0;
    let van =0;
    onibus = parseInt(quant_passageiros/27);
    
    if(((quant_passageiros-(onibus*27))>15)){
        onibus++;
    }
    else if(quant_passageiros-(onibus*27)<=15 && quant_passageiros-(onibus*27)!=0){
        van++;
    }
    return [onibus, van];
}

function development_function(){
    let qtd = [0,0,0];
    //qtd=  stringTratament();
    let qtdsIda= [0,0];
    let qtdsVolta = [0,0];
    let qtdsVespertino = [0,0];
    let qtdIda = qtd[0]
    let qtdVolta=qtd[1];
    let qtdVespertino = qtd[2];
    let idaOnibus=0;
    let idaVan =0;
    let voltaOnibus = 0;
    let voltaVan =0;
    let vespertinoOnibus =0;
    let vespertinoVan =0;
    /*PARTE DE QUANTOS CARROS VÃO DE MANHA*/
    qtdsIda = amount_cars(qtdIda);
    idaOnibus = qtdsIda[0];
    idaVan = qtdsIda[1];

    /*PARTE DE QUANTOS CARROS VOLTAM MEIO DIA */
    qtdsVolta = amount_cars(qtdVolta);
    voltaOnibus = qtdsVolta[0];
    voltaVan = qtdsVolta[1];
    
    /*PARTE DE QUANTOS CARROS VOLTAM VESPERTINO */
    qtdsVespertino = amount_cars(qtdVespertino);
    vespertinoOnibus = qtdsVespertino[0];
    vespertinoVan = qtdsVespertino[1];
    /*
    if((idaOnibus*27 + idaVan*15)>(voltaOnibus*27+voltaVan*15)){
        document.getElementById("value_volta").innerHTML = "12h: "+idaOnibus+" onibus "+idaVan+" master";
    }
    else if((idaOnibus == 1 && idaVan==0) || (idaVan == 1 && idaOnibus==0)){
        document.getElementById("value_volta").innerHTML = "12h: "+voltaOnibus+" onibus "+voltaVan+" master";
    }

    
    alert("Função ainda em desenvolvimento!\nBreve em funcionamento :D")
    
    document.getElementById("value_ida").innerHTML = "05h: "+idaOnibus+" onibus "+idaVan+" master";
    //document.getElementById("value_volta").innerHTML = "12h: "+voltaOnibus+" onibus "+voltaVan+" master";
    document.getElementById("value_vespertino").innerHTML = "18h: "+vespertinoOnibus+" onibus "+vespertinoVan+" master";
    */
    alert("Função ainda em desenvolvimento!\nBreve em funcionamento :D 🇺🇸")
}

function edit_list_matutino(){
    let lista = document.getElementById("input_list").value;
    lista = lista.replace("   ", "\n").split("\n");
    let cont =0;
    let aux;
    let aux2;
    let listaFinal = "";
    let conteudo;
    listaFinal += lista[0];
    for(let i=1; i<lista.length; i ++){
        aux2 = lista[i].toLowerCase();
        if(aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat")  ){
            listaFinal += "\n\n"+lista[i];
            cont =0;
        }
        else if(((aux2.includes("volta") || aux2.includes("voita") || aux2.includes("volt")) && (!aux2.includes("vespertino") || !aux2.includes("vesp")))){
            cont ++;
            aux = lista[i]
            if(!isNaN(aux[0])){
                aux = cont + aux.substring(2, aux.length);
            }
            else{
                aux = cont + " " + aux;
            }
            console.log(aux)
            listaFinal += "\n"+aux
        }
        //console.log();
    }
    var textArea = document.createElement("textarea")
    textArea.value = listaFinal;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy")
    document.body.removeChild(textArea);
    //console.log(listaFinal)
    conteudo = window.encodeURIComponent(listaFinal);
    let url = "https://api.whatsapp.com/send?text= "+conteudo;
    var win = window.open(url, '_blank');
    win.focus();
    
    //alert("Lista copiada com sucesso!")
}


/* Lista das faculdades que estão funcionando e cadastradas
uefs - V
unex - V
unef - V
ufrb - V
unifan - V
acesso - V
unifacs - V
pitagoras - V
fan - V
nais - V
estacio - V
anhanguera - V
unopar - V
uniasselvi - V
fat - V
*/


/**
 * 
 */
function edit_list_vespertino(){
    let lista = document.getElementById("input_list").value;
    lista = lista.replace("   ", "\n").split("\n");
    
    let listaFinal = " ";
    listaFinal += lista[0];
    let cont =0;
    let aux;
    let aux2;
    for(let i=1; i<lista.length; i ++){
        aux2 = lista[i].toLowerCase();
        if(aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat")  ){
            listaFinal += "\n\n"+lista[i];
            cont =0;
        }
        else if(((aux2.includes("volta") || aux2.includes("voita") || aux2.includes("volt")) && (aux2.includes("vespertino") || aux2.includes("vesp")))){
            cont ++;
            aux = lista[i]
            if(!isNaN(aux[0]) ){
                aux = cont + aux.substring(2, aux.length);
                
            }
            else{
                aux = cont + " " + aux;
            }
            
            listaFinal += "\n"+aux
        }
        
    }
    var textArea = document.createElement("textarea")
    textArea.value = listaFinal;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy")
    document.body.removeChild(textArea);
    conteudo = window.encodeURIComponent(listaFinal);
    let url = "https://api.whatsapp.com/send?text= "+conteudo;
    var win = window.open(url, '_blank');
    win.focus();
    //alert("Lista copiada com sucesso!")
}

function edit_list_ida(){
    let lista = document.getElementById("input_list").value;
    lista = lista.replace("   ", "\n").split("\n");
    let cont =0;
    let aux;
    let aux2;
    let listaFinal = "";
    let conteudo;
    listaFinal += lista[0];
    for(let i=1; i<lista.length; i ++){
        aux2 = lista[i].toLowerCase();
        if(aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat")  ){
            listaFinal += "\n\n"+lista[i];
            cont =0;
        }
        else if(((aux2.includes("ida") || aux2.includes("Ida") || aux2.includes("vai") || aux2.includes("Vai")))){
            let aux3= ""
            aux3 = aux2.replace(/[^\w\s]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
            
            for(let o=0; o<aux3.length; o++){
                if(aux3[o] == "ida" || aux3[o] == "Ida" || aux3[o] == "vai"){
                    cont ++;
                    aux = lista[i]
                    if(!isNaN(aux[0])){
                        aux = cont + aux.substring(2, aux.length);
                    }
                    else{
                        aux = cont + " " + aux;
                    }
                    console.log(aux)
                    listaFinal += "\n"+aux
                }
            }
            
        }
        //console.log();
    }
    var textArea = document.createElement("textarea")
    textArea.value = listaFinal;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy")
    document.body.removeChild(textArea);
    //console.log(listaFinal)
    conteudo = window.encodeURIComponent(listaFinal);
    let url = "https://api.whatsapp.com/send?text= "+conteudo;
    var win = window.open(url, '_blank');
    win.focus();
    
    //alert("Lista copiada com sucesso!")
}
