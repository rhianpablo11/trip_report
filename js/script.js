function stringTratament(){
    let listaTransporte = document.getElementById("input_list").value.toLowerCase()
    
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
        else if(listaTratada[i]=="volta"){
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
    document.getElementById("value_ida").innerHTML = ida;
    document.getElementById("value_volta").innerHTML = volta;
    document.getElementById("value_vespertino").innerHTML = vespertino;
    let conteudo = "\nIdas: "+ ida + "\n"+"Volta: " + volta + "\n"+ "Volta Vespertino: "+ vespertino;
    conteudo = window.encodeURIComponent(conteudo);
    document.getElementById("share_information").href = "https://api.whatsapp.com/send?text=" +"Dados da lista: "+ conteudo;
    //alert("Idas: "+ ida + "\nVolta: " + volta + "\nVolta Vespertino: "+vespertino);

}

function development_function(){
    alert("Função ainda em desenvolvimento!\nBreve em funcionamento :D")
}

function edit_list_matutino(){
    let lista = document.getElementById("input_list").value.toLowerCase();
    lista = lista.replace("   ", "\n").split("\n");
    
    //console.log(lista)
    let listaFinal = "";
    listaFinal += lista[0];
    for(let i=1; i<lista.length; i ++){
        if((lista[i].includes("volta") && !lista[i].includes("vespertino")) || lista[i].includes("uefs") || lista[i].includes("unex") || lista[i].includes("unef") || lista[i].includes("ufrb") || lista[i].includes("unifan") || lista[i].includes("acesso") || lista[i].includes("unifacs")){
            console.log("ola");
            listaFinal += "\n"+lista[i]
        }
        //console.log();
    }
    var textArea = document.createElement("textarea")
    textArea.value = listaFinal;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy")
    document.body.removeChild(textArea);
    console.log(listaFinal)
}

function edit_list_vespertino(){
    let lista = document.getElementById("input_list").value.toLowerCase();
    lista = lista.split("\n");
    let listaFinal = "";
    listaFinal += lista[0];
    for(let i=1; i<lista.length; i ++){
        if((lista[i].includes("volta") && lista[i].includes("vespertino")) || lista[i].includes("uefs") || lista[i].includes("unex") || lista[i].includes("unef") || lista[i].includes("ufrb") || lista[i].includes("unifan") || lista[i].includes("acesso") || lista[i].includes("unifacs")){
            console.log("ola");
            listaFinal += "\n"+lista[i]
        }
    }
    var textArea = document.createElement("textarea")
    textArea.value = listaFinal;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy")
    document.body.removeChild(textArea);
    console.log(listaFinal)
}