get_year = function (){
    let year = new Date;
    if(document.getElementsByClassName("year").length == 1){
        document.getElementsByClassName("year")[0].innerHTML = year.getFullYear()
    } else{
        for(let i=0; i<document.getElementsByClassName("year").length; i++){
            document.getElementsByClassName("year")[i].innerHTML = year.getFullYear()
        }
    }

}

const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
listaFaculdades = ['uefs', 'unex', 'unef', 'ufrb', 'unifan', 'unifacs', 'acesso', 'pitagoras', 'pitágoras', 'fan', 'nais', 'npj', 'anhanguera', 'unopar', 'uniasselvi', 'estacio', 'facs', 'fat', "unifacs(santa monica)" , "unifacs (santa monica)", "unifacs(santa mônica)" , "unifacs (santa mônica)", "faculdade", "fael"]
// Altera o tema
function changeTheme(event) {
    
    if(event.matches) {
        // Se o tema for dark vai entrar nessa parte do codigo
        //aqui faz as chamadas dos elementos para poder mudar de cor
        document.body.style.backgroundColor = 'black'

        for(let i=0; i<document.getElementsByClassName("navbar_style_light").length; i++){
            let elemento = document.getElementsByClassName("navbar_style_light")[i]
            elemento.classList.remove('navbar_style_light')
            elemento.classList.add('navbar_style_dark'); 
        }

        for(let i=0; i<document.getElementsByClassName("section_info_result_light").length; i++){
            let elemento = document.getElementsByClassName("section_info_result_light")[i]
            elemento.classList.remove('section_info_result_light')
            elemento.classList.add('section_info_result_dark'); 
        }

        for(let i=0; i<document.getElementsByClassName("block_text_light").length; i++){
            let elemento = document.getElementsByClassName("block_text_light")[i]
            elemento.classList.remove('block_text_light')
            elemento.classList.add('block_text_dark'); 
        }

        for(let i=0; i<document.getElementsByClassName("buttons_style_light").length; i++){
            let elemento = document.getElementsByClassName("buttons_style_light")[i]
            elemento.classList.remove('buttons_style_light')
            elemento.classList.add('buttons_style_dark'); 
        }

        for(let i=0; i<document.getElementsByClassName("toggle_button_light").length; i++){
            let elemento = document.getElementsByClassName("toggle_button_light")[i]
            elemento.classList.remove('toggle_button_light')
            elemento.classList.add('toggle_button_dark'); 
        }

        for(let i=0; i<document.getElementsByClassName("footer_style_light").length; i++){
            let elemento = document.getElementsByClassName("footer_style_light")[i]
            elemento.classList.remove('footer_style_light')
            elemento.classList.add('footer_style_dark'); 
        }

        for(let i=0; i<document.getElementsByClassName("dialog_light").length; i++){
            let elemento = document.getElementsByClassName("dialog_light")[i]
            elemento.classList.remove('dialog_light')
            elemento.classList.add('dialog_dark'); 
        }

    } else {
        // O tema é o light
        //dentro dessa parte tem q fazer as chamadas para mudança de cor
        document.body.style.backgroundColor = 'white'
        for(let i=0; i<document.getElementsByClassName("navbar_style_dark").length; i++){
            let elemento = document.getElementsByClassName("navbar_style_dark")[i]
            elemento.classList.remove('navbar_style_dark')
            elemento.classList.add('navbar_style_light'); 
        }

        for(let i=0; i<document.getElementsByClassName("section_info_result_dark").length; i++){
            let elemento = document.getElementsByClassName("section_info_result_dark")[i]
            elemento.classList.remove('section_info_result_dark')
            elemento.classList.add('section_info_result_light'); 
        }

        for(let i=0; i<document.getElementsByClassName("block_text_dark").length; i++){
            let elemento = document.getElementsByClassName("block_text_dark")[i]
            elemento.classList.remove('block_text_dark')
            elemento.classList.add('block_text_light'); 
        }

        for(let i=0; i<document.getElementsByClassName("buttons_style_dark").length; i++){
            let elemento = document.getElementsByClassName("buttons_style_dark")[i]
            
            elemento.classList.remove('buttons_style_dark')
            elemento.classList.add('buttons_style_light'); 
        }

        for(let i=0; i<document.getElementsByClassName("toggle_button_dark").length; i++){
            let elemento = document.getElementsByClassName("toggle_button_dark")[i]
            elemento.classList.remove('toggle_button_dark')
            elemento.classList.add('toggle_button_light'); 
        }

        for(let i=0; i<document.getElementsByClassName("footer_style_dark").length; i++){
            let elemento = document.getElementsByClassName("footer_style_dark")[i]
            elemento.classList.remove('footer_style_dark')
            elemento.classList.add('footer_style_light'); 
        }

        for(let i=0; i<document.getElementsByClassName("dialog_dark").length; i++){
            let elemento = document.getElementsByClassName("dialog_dark")[i]
            elemento.classList.remove('dialog_dark')
            elemento.classList.add('dialog_light'); 
        }
    }
}

// Escuta a mudança de tema no sistema
prefersColorScheme.addListener(changeTheme);

// Altera o tema conforme o tema do usuário
changeTheme(prefersColorScheme);

/*
PARTE LOGICA DO CODIGO
*/

function homePage(){
    window.location.href = 'index.html'
    Storage.clear()
}

function salvarLista(){
    let listaTransporte = document.getElementById("input_list").value
    sessionStorage.setItem('lista_completa', listaTransporte)
}

function tratamentoLista(){
    let listaBruta = sessionStorage.getItem('lista_completa').toLowerCase()
    return listaTratada= listaBruta.replace(/[^\w\s]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
}

function quantidadePessoas(){
    let ida = volta = vespertino = idaVoltaVespertinoAbsoluto = idaVoltaAbsoluto = 0;
    let lista = tratamentoLista();
    for(let i=0; i<lista.length; i++){
        if(lista[i]=="ida" || lista[i] =="idaa" || lista[i] == "vai" || lista[i] == "ide" || lista[i]=="lda"){
            ida++;
        }
        else if(lista[i]=="volta" || lista[i] == "voltando" || lista[i] == "volt" || lista[i] == "voita" || lista[i] == "vinda"){
            volta++;
        }
        else if(lista[i]=="vespertino" || lista[i] =="vesp" || lista[i] =="vesper" || lista[i] =="vespertina"){
            vespertino++;
        }
        if((lista[i]=="volta" || lista[i]=="volt" || lista[i]=="voltando" || lista[i]=="vinda" || lista[i]=="voita") && (lista[i-2]=="ida" || lista[i-1]=="ida" || lista[i-2]=="vai" || lista[i-1]=="vai") ){
            if((i+1)<=lista.length && (lista[i+1]=="vespertino" || lista[i+1]=="vesp" || lista[i+1] =="vesper" || lista[i+1] =="vespertina")){
                idaVoltaVespertinoAbsoluto ++;
            }
            else if((i+1)<=lista.length && (lista[i+1]!="vespertino" || lista[i+1]!="vesp" || lista[i+1] =="vesper" || lista[i+1] =="vespertina")){
                idaVoltaAbsoluto ++;
            }
        }
        
    }
    volta -= vespertino;
    return [ida, volta, vespertino, idaVoltaAbsoluto, idaVoltaVespertinoAbsoluto];
}

function preencherQuantidadeHome(){
    let ida = volta = vespertino = 0;
    let geral = [0,0,0];
    geral = quantidadePessoas();
    ida = geral[0]
    volta = geral[1]
    vespertino = geral[2]
    document.getElementById("quantity_ida").innerHTML = "Ida: " + ida;
    document.getElementById("quantity_volta").innerHTML = "Volta matutino: "+volta;
    document.getElementById("quantity_vespertino").innerHTML = "Volta vespertino: "+vespertino;
    let conteudo = "\nIdas: "+ ida + "\n"+"Volta: " + volta + "\n"+ "Volta Vespertino: "+ vespertino;
    conteudo = window.encodeURIComponent(conteudo);
    document.getElementById("share_list_whatsapp").href = "https://api.whatsapp.com/send?text=" +"Dados da lista: "+ conteudo;
}

function preencherQuantidadeIda(){
    let ida = volta = 0;
    let geral = [0,0,0,0,0];
    geral = quantidadePessoas();
    ida = geral[0]
    volta = geral[1]
    document.getElementById("ida_value").innerHTML = "Ida: " + ida;
    document.getElementById("volta_value").innerHTML = "";
    let conteudo = window.encodeURIComponent(sessionStorage.getItem('lista_ida'));
    document.getElementById("share_information_pg2").href = "https://api.whatsapp.com/send?text=" + conteudo;
}

function preencherQuantidadeMatutino(){
    let ida = volta = 0;
    let geral = [0,0,0,0,0];
    geral = quantidadePessoas();
    ida = geral[3]
    volta = geral[1]
    document.getElementById("ida_value").innerHTML = "Ida: " + ida;
    document.getElementById("volta_value").innerHTML = "Volta: "+volta;
    let conteudo = window.encodeURIComponent(sessionStorage.getItem('lista_matutino'));
    document.getElementById("share_information_pg2").href = "https://api.whatsapp.com/send?text=" + conteudo;
}

function preencherQuantidadeVespertino(){
    let ida = volta = 0;
    let geral = [0,0,0,0,0];
    geral = quantidadePessoas();
    ida = geral[4]
    volta = geral[2]
    document.getElementById("ida_value").innerHTML = "Ida: " + ida;
    document.getElementById("volta_value").innerHTML = "Volta: "+volta;
    let conteudo = window.encodeURIComponent(sessionStorage.getItem('lista_vespertino'));
    document.getElementById("share_information_pg2").href = "https://api.whatsapp.com/send?text=" + conteudo;
}

function editaListaIda(){
    let lista = sessionStorage.getItem('lista_completa');
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
        else if(((aux2.includes("ida") || aux2.includes("Ida") || aux2.includes("lda") || aux2.includes("vai") || aux2.includes("Vai")))){
            let aux3= ""
            aux3 = aux2.replace(/[^\w\s]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
            
            for(let o=0; o<aux3.length; o++){
                if(aux3[o] == "ida" || aux3[o] == "Ida" || aux3[o] == "vai" || aux3[o] == "lda"|| aux3[o] == "Vai"){
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
    }
    var textArea = document.createElement("textarea")
    textArea.value = listaFinal;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy")
    document.body.removeChild(textArea);
    console.log(listaFinal.length)
    if(listaFinal.length >2){
        conteudo = window.encodeURIComponent(listaFinal);
        let url = "https://api.whatsapp.com/send?text="+conteudo;
        var win = window.open(url, '_blank');
        win.focus();
    } else{
        alert('por favor, insira uma lista primeiro')
    }
}

function editaListaIda(){
    let lista = sessionStorage.getItem('lista_completa');
    lista = lista.replace("   ", "\n").split("\n");
    let cont =0;
    let aux;
    let aux2;
    let listaFinal = "";
    let conteudo;
    listaFinal += lista[0];

    for (let i=1; i<lista.length; i++){
        aux2 = lista[i].toLowerCase();
        if(((aux2.includes("volta") ||aux2.includes("volt") ||aux2.includes("voita") ) || (aux2.includes("vesp") || aux2.includes("vespertino"))) && (aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat"))){
            let aux3 = aux2.replace(/[^\w\sÀ-ÿ]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
            let aux4= '';
            
            for(let j=0; j<aux3.length; j++){
                
                if(listaFaculdades.includes(aux3[j])){
                    
                    aux4 = aux3[j]
                    console.log('oioi '+aux4)
                    aux2= aux2.replace(aux4, " ")
                    console.log('oioi '+aux2)
                }
            }
            lista[i]=aux2
            lista.splice(i+1, 0, aux4.toUpperCase())
        }
    }

    for(let i=1; i<lista.length; i ++){
        aux2 = lista[i].toLowerCase();
        if(aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat")  ){
            
                    listaFinal += "\n\n"+lista[i];
                    //console.log(lista[i])
                    cont =0;
            
            
        }
        else if(((aux2.includes("ide")||aux2.includes("ida") || aux2.includes("Ida") || aux2.includes("vai") || aux2.includes("Vai")))){
            let aux3= ""
            aux3 = aux2.replace(/[^\w\s]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
            
            for(let o=0; o<aux3.length; o++){
                if(aux3[o] == "ida" || aux3[o] == "Ida" || aux3[o] == "vai" || aux3[o] == "ide"){
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
    }
    sessionStorage.setItem('lista_ida', listaFinal);
}

function editaListaMatutino(){
    let lista = sessionStorage.getItem('lista_completa');
    lista = lista.replace("   ", "\n").split("\n");
    
    let cont =0;
    let aux;
    let aux2;
    let listaFinal = "";
    let conteudo;
    listaFinal += lista[0];

    for (let i=1; i<lista.length; i++){
        aux2 = lista[i].toLowerCase();
       
        //verificação para conferir se tem uma linha com o nome da faculdade junto com o nome de ida e volta 
        if(((aux2.includes("volta") ||aux2.includes("volt") || aux2.includes("voita")  || aux2.includes("vinda") ) || (aux2.includes("vesp") || aux2.includes("vespertino") || aux2.includes("vesper") || aux2.includes("vespertina"))) && (aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat"))){
            let aux3 = aux2.replace(/[^\w\sÀ-ÿ]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
            let aux4= '';

            for(let j=0; j<aux3.length; j++){
                
                if(listaFaculdades.includes(aux3[j])){
                    
                    aux4 = aux3[j]
                    aux2= aux2.replace(aux4, " ")
                }
            }
            lista[i]=aux2
            lista.splice(i+1, 0, aux4.toUpperCase())
        }
    }


    for(let i=1; i<lista.length; i ++){
        aux2 = lista[i].toLowerCase();
        console.log(aux2)
        if(aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat")  ){
            let aux3 = ''
            aux3 = aux2.replace(/[^\w\sÀ-ÿ]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
            for(let h=0;h<aux3.length; h++){
                
                if(listaFaculdades.indexOf(aux3[h])>-1){
                    //verificar se tem texto de estudante depois 
                    listaFinal += "\n\n"+lista[i];
                    //console.log(lista[i])
                    cont =0;  
                } 
                if((aux3[h] == 'volta' || aux3[h] == 'voita' || aux3[h] == 'volt' || aux3[h] == 'vinda' ) && (!aux2.includes("vespertino") && !aux2.includes("vesp"))){
                    cont ++;
                    
                    aux = lista[i]
                    if(!isNaN(aux[0])){
                        aux = cont + aux.replace(/\d+/g, ''); 
                    }
                    else{
                        aux = cont + " " + aux;
                    }
                    listaFinal += "\n"+aux
                }
            }  
        }
        else if(((aux2.includes("volta") || aux2.includes("voita") || aux2.includes("volt") || aux2.includes("vinda")) && (!aux2.includes("vespertino") && !aux2.includes("vesp")))){
            cont ++;
            aux = lista[i]
            if(!isNaN(aux[0])){
                aux = cont + aux.replace(/\d+/g, ''); 
            }
            else{
                aux = cont + " " + aux;
            }
            listaFinal += "\n"+aux
        }    
    }
    lista = listaFinal.replace("   ", "\n").split("\n");
    listaFinal = ''
    listaFinal+= lista[0].replace('\n', '')

    for(let i=1; i<lista.length; i ++){
        let aux2 = lista[i].toLowerCase()
        let aux3 = (lista[(lista.length)-1].toLowerCase()).trim()
        console.log(aux2)
        if(aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat")  ){
            if(i+1<lista.length){
                if(lista[i+1] == ""){
                    console.log("verificando problema ",lista[i])
                    if( ((aux2.includes("volta") || aux2.includes("voita") || aux2.includes("volt") || aux2.includes("vinda")) && (!aux2.includes("vespertino") || !aux2.includes("vesp"))) ){
                        listaFinal +="\n"+lista[i]
                    }
                }
                else{
                    let aux4 = aux2.replace(/[^\w\sÀ-ÿ]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
                    for(let h=0; h<aux4.length; h++){
                        if(listaFaculdades.indexOf(aux4[h])>-1){
                            listaFinal += "\n\n"+lista[i]
                        } else if((aux4[h] == 'volta' || aux4[h] == 'voita' || aux4[h] == 'volt' || aux4[h] == 'vinda' ) && (!aux2.includes("vespertino") || !aux2.includes("vesp"))){
                            listaFinal +="\n"+lista[i]
                        }
                    }
                   
                }
            } else if( ((aux2.includes("volta") || aux2.includes("voita") || aux2.includes("volt") || aux2.includes("vinda")) && (!aux2.includes("vespertino") || !aux2.includes("vesp"))) ){
                
                listaFinal +="\n"+lista[i]
            }
        }else if(aux2!=''){
            listaFinal +="\n"+lista[i]
        }
    }
    sessionStorage.setItem('lista_matutino', listaFinal)
}


function editaListaVespertino(){
    let lista = sessionStorage.getItem('lista_completa');
    
    lista = lista.replace("  ", "\n").split("\n");
    lista[lista.length] = " "

    console.log('AAAAAAAAAAAAAA ', lista)
    let listaFinal = " ";
    listaFinal += lista[0];
    let cont =0;
    let aux;
    let aux2;
    for (let i=1; i<lista.length; i++){
        aux2 = lista[i].toLowerCase();
        if(((aux2.includes("volta") ||aux2.includes("volt") ||aux2.includes("voita") || aux2.includes("vinda") ) || (aux2.includes("vesp") || aux2.includes("vespertino"))) && (aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat")  || aux2.includes("fael"))){
            let aux3 = aux2.replace(/[^\w\sÀ-ÿ]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
            let aux4= '';
            
            for(let j=0; j<aux3.length; j++){
                
                if(listaFaculdades.includes(aux3[j])){
                    aux4 = aux3[j]
                    aux2= aux2.replace(aux4, " ")
                }
            }
            lista[i]=aux2
            lista.splice(i+1, 0, aux4.toUpperCase())
        }
    }
    
    console.log('lista depois de retratada: ' +lista)
    for(let i=1; i<lista.length; i ++){
        aux2 = lista[i].toLowerCase();
        if(aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat") || aux2.includes("fael")){
            let aux3 = ''
            aux3 = aux2.replace(/[^\w\sÀ-ÿ]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
            console.log(aux3)
            for(let h=0;h<aux3.length; h++){
                if(listaFaculdades.indexOf(aux3[h])>-1){
                    listaFinal += "\n\n"+lista[i];
                    console.log(lista[i])
                    cont =0;
                }
                if((aux3[h] == 'vespertino' || aux3[h] == 'vesp' || aux3[h] == 'vesper' || aux3[h] == 'vespertina')&& (aux2.includes("volta") || aux2.includes("voita") || aux2.includes("volt")  || aux2.includes("vinda") )){
                    cont ++;
                    
                    aux = lista[i]
                    
                    if(!isNaN(aux[0])){
                        aux = cont + aux.replace(/\d+/g, ''); 

                    }
                    else{
                        aux = cont + " " + aux;
                    }
                    listaFinal += "\n"+aux
                }
            }  
        }
        else if((aux2.includes("volta") || aux2.includes("voita") || aux2.includes("volt")  || aux2.includes("vinda") ) && (aux2.includes("vespertino") || aux2.includes("vesp"))){
            cont ++;
            aux = lista[i]
            console.log("MOSTRANDO O NUMERO: "+aux)
            console.log("MOSTRANDO O TIPO: "+typeof( aux[0]))
            console.log(isNaN(aux[0]))
            if(!isNaN(aux[0]) ){
                
                aux = cont + aux.replace(/\d+/g, '');   
            }
            else{
                aux = cont + " " + aux;
            }            
            listaFinal += "\n"+aux
        }        
    }

    lista = listaFinal.replace("  ", "\n").split("\n");
    listaFinal = ''
    listaFinal+= lista[0].replace('\n', '')
    console.log('lista -0', lista[0])
    for(let i=1; i<lista.length; i ++){
        let aux2 = lista[i].toLowerCase()
        let aux3 = (lista[(lista.length)-1].toLowerCase()).trim()
        console.log(aux2)
        if(aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat") || aux2.includes("fael") ){
            if(i+1<lista.length){
                if(lista[i+1] == ""){
                    console.log("verificando problema ",lista[i])
                    if( ((aux2.includes("volta") || aux2.includes("voita") || aux2.includes("volt")  || aux2.includes("vinda") ) && (aux2.includes("vespertino") || aux2.includes("vesp"))) ){
                        listaFinal +="\n"+lista[i]
                    }
                }
                else{
                    let aux4 = aux2.replace(/[^\w\sÀ-ÿ]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
                    for(let h=0; h<aux4.length; h++){
                        if(listaFaculdades.indexOf(aux4[h])>-1){
                            listaFinal += "\n\n"+lista[i]
                        } else if((aux4[h] == 'volta' || aux4[h] == 'voita' || aux4[h] == 'volt' || aux4[h] == 'vinda') && (aux2.includes("vespertino") || aux2.includes("vesp"))){
                            listaFinal +="\n"+lista[i]
                        }
                    }
                   
                }
            } else if( ((aux2.includes("volta") || aux2.includes("voita") || aux2.includes("volt")  || aux2.includes("vinda") ) && (aux2.includes("vespertino") || aux2.includes("vesp"))) ){
                console.log('teste')
                listaFinal +="\n"+lista[i]
            }
        }else if(aux2!=''){
            listaFinal +="\n"+lista[i]
        }
    }




    sessionStorage.setItem('lista_vespertino', listaFinal)
}

function enviarListaMatutino(){
    editaListaMatutino()
    let conteudo = window.encodeURIComponent(sessionStorage.getItem('lista_matutino'));
    let url = "https://api.whatsapp.com/send?text="+conteudo;
    var win = window.open(url, '_blank');
    win.focus();
}

function enviarListaVespertino(){
    editaListaVespertino()
    let conteudo = window.encodeURIComponent(sessionStorage.getItem('lista_vespertino'));
    let url = "https://api.whatsapp.com/send?text="+conteudo;
    var win = window.open(url, '_blank');
    win.focus();
}

function verListaVespertino(){
    editaListaVespertino()
    window.location.href = 'edited_list.html?' + 'vespertino'
}

function verListaMatutino(){
    editaListaMatutino()
    window.location.href = 'edited_list.html?' + 'matutino'
}

function verListaIda(){
    editaListaIda();
    window.location.href = 'edited_list.html?' + 'ida'
}

function listaIda(){
    document.getElementById("titulo_edit").innerHTML = "Lista Ida"
    preencherQuantidadeIda()
    editaListaIda()
    document.getElementById("list_text").innerHTML = sessionStorage.getItem('lista_ida')
    let conteudo = window.encodeURIComponent(sessionStorage.getItem('lista_ida'));
    document.getElementById("share_information_pg2").href ="https://api.whatsapp.com/send?text="+conteudo
}

function listaMatutino(){
    document.getElementById("titulo_edit").innerHTML = "Lista matutino"
    preencherQuantidadeMatutino()
    editaListaMatutino()
    document.getElementById("list_text").innerHTML = sessionStorage.getItem('lista_matutino')
    let conteudo = window.encodeURIComponent(sessionStorage.getItem('lista_matutino'));
    document.getElementById("share_information_pg2").href ="https://api.whatsapp.com/send?text="+conteudo
}

function listaVespertino(){
    document.getElementById("titulo_edit").innerHTML = "Lista Vespertino"
    preencherQuantidadeVespertino()
    editaListaVespertino()
    document.getElementById("list_text").innerHTML = sessionStorage.getItem('lista_vespertino')
    let conteudo = window.encodeURIComponent(sessionStorage.getItem('lista_vespertino'));
    document.getElementById("share_information_pg2").href ="https://api.whatsapp.com/send?text="+conteudo
}

/*
EXTRA FUNCTIONS OF CODE
*/

function sendListLikeBoss(){
    const currentDate = new Date;
    //erro nessa parte da data
    let day = currentDate.getDate()+1;
    let month = currentDate.getMonth() +1;
    let nameToday = currentDate.toString().substring(0, 3).toLowerCase();
    console.log(typeof currentDate.toString())
    console.log(day)
    console.log(month)
    console.log(nameToday)
    if(day<10){
        day= "0"+day;
    }
    if(month<10){
        month="0"+month;
    }
    let nameTodayPt = "";
    if(nameToday.toLowerCase() == "mon"){
        nameTodayPt ="Terça";
    } else if(nameToday == "tue"){
        nameTodayPt = "Quarta";
    } else if(nameToday =="wed"){
        nameTodayPt = "Quinta";
    } else if(nameToday == "thu"){
        nameTodayPt= "Sexta";
    } else if(nameToday == "fri"){
        nameTodayPt = "Sabado";
    } else if(nameToday == "sat"){
        nameTodayPt = "Domingo";
    } else if(nameToday == "sun"){
        nameTodayPt = "Segunda";
    }

     let  lista_format = "*Lista* - *"+ nameTodayPt+" - Feira* "+day+"/"+month+"\n\n*UEFS*\n1. Rhian(ida e volta vespertino)\n2. \n\n*UNEX*\n1. \n\n*CLÍNICA UNEX*\n1.\n\n*UNEF*\n1. \n\n";
     conteudo = window.encodeURIComponent(lista_format);
     let url = "https://api.whatsapp.com/send?text="+conteudo;
     var win = window.open(url, '_blank');
     win.focus();
    
}

function errorReport(){

    let url = "https://wa.me/5575992658169?text=Erro encontrado em: ";
     var win = window.open(url, '_blank');
     win.focus();
}

function sendList(){
    const currentDate = new Date;
    let day = currentDate.getDate()+1;
    let month = currentDate.getMonth() +1;
    let nameToday = currentDate.toString().substring(0, 3).toLowerCase();
    if(day<10){
        day= "0"+day;
    }
    if(month<10){
        month="0"+month;
    }
    let nameTodayPt = "";
    if(nameToday.toLowerCase() == "mon"){
        nameTodayPt ="Terça";
    } else if(nameToday == "tue"){
        nameTodayPt = "Quarta";
    } else if(nameToday =="wed"){
        nameTodayPt = "Quinta";
    } else if(nameToday == "thu"){
        nameTodayPt= "Sexta";
    } else if(nameToday == "fri"){
        nameTodayPt = "Sabado";
    } else if(nameToday == "sat"){
        nameTodayPt = "Domingo";
    } else if(nameToday == "sun"){
        nameTodayPt = "Segunda";
    }

     let  lista_format = "*Lista* - *"+ nameTodayPt+" - Feira* "+day+"/"+month+"\n\n*UEFS*\n1. \n\n*UNEX*\n1. \n\n*CLÍNICA UNEX*\n1.\n\n*UNEF*\n1. \n\n ";
     conteudo = window.encodeURIComponent(lista_format);
     let url = "https://api.whatsapp.com/send?text="+conteudo;
     var win = window.open(url, '_blank');
     win.focus();
    
}

const versionCodeCurrent = "4.0.7"
const keyVersionCode = 'siteVersion'
function saveVersion(){
    localStorage.setItem(keyVersionCode, versionCodeCurrent)
}

function checkUpdate(){
    versionCodeRunning = localStorage.getItem(keyVersionCode)
    if(versionCodeCurrent != versionCodeRunning){
        document.getElementById("version").innerHTML = versionCodeCurrent;
        const modal = document.getElementById("updateLogs")
        modal.showModal()
        buttonClose = document.getElementById("closeModal")
        buttonClose.onclick = function(){
            modal.close()
        }
        saveVersion()
    } else{

    } 
}

checkUpdate()
