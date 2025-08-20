const listaFaculdades = ['uefs', 'unex', 'unef', 'ufrb', 'unifan', 'unifacs', 'acesso', 'pitagoras', 'pitágoras', 'fan', 'nais', 'npj', 'anhanguera', 'unopar', 'uniasselvi', 'estacio', 'facs', 'fat', "unifacs(santa monica)" , "unifacs (santa monica)", "unifacs(santa mônica)" , "unifacs (santa mônica)", "faculdade", "fael", "senai", "pro saber", "pró saber", "senaii"]


function tratamentoLista(){
    let listaBruta = sessionStorage.getItem('lista_bruta')
    if(listaBruta == null){
        return null
    }
    return listaBruta.toLowerCase().replace(/[^\w\s]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
}


function editaListaIda(){
    let lista: string | null | string[]
    lista = sessionStorage.getItem('lista_bruta');
    if(lista == null){
        return null
    }

    lista = lista.replace("   ", "\n").split("\n");
    let cont =0;
    let aux: string | number | string[] | number[]
    let aux2;
    let listaFinal = "";
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
                    cont =0;

        }
        else if(((aux2.includes("ide")||aux2.includes("ida") || aux2.includes("Ida") || aux2.includes("vai") || aux2.includes("Vai")))){
            let aux3:string | number | string[]
            aux3 = ""
            aux3 = aux2.replace(/[^\w\s]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
            
            for(let o=0; o<aux3.length; o++){
                if(aux3[o] == "ida" || aux3[o] == "Ida" || aux3[o] == "vai" || aux3[o] == "ide"){
                    cont ++;
                    aux = lista[i]
                    if(!isNaN(+aux[0])){
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
    return listaFinal
}


function cleanWhiteSpace(lista: string): string{
    const listaCorrigida = lista.replace(/ {3,}/g, '\n');
    return listaCorrigida
}


function editaListaMatutino(){
    let lista: string | null | string[]
    lista = sessionStorage.getItem('lista_bruta');

    if(lista == null){
        return null
    }
    lista = cleanWhiteSpace(lista)
    lista = lista.replace("   ", "\n").split("\n");



    let cont =0;
    let aux;
    let aux2;
    let listaFinal = "";
    listaFinal += lista[0];


    for (let i=1; i<lista.length; i++){
        aux2 = lista[i].toLowerCase();
        //verificação para conferir se tem uma linha com o nome da faculdade junto com o nome de ida e volta 
        if(((aux2.includes("volta") ||aux2.includes("volt") || aux2.includes("voita")  || aux2.includes("vinda") ) || (aux2.includes("vesp") || aux2.includes("vespertino") || aux2.includes("vesper") || aux2.includes("vespertina"))) && (aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("senai") || aux2.includes("senaii") || aux2.includes("pro saber") || aux2.includes("pró saber") || aux2.includes("fat"))){
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
        if(aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("senai") || aux2.includes("senaii") || aux2.includes("pro saber") || aux2.includes("pró saber") || aux2.includes("fat")  ){
            
            let aux3:string | number | string[]
            aux3 = ''
            aux3 = aux2.replace(/[^\w\sÀ-ÿ]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
            
            //quando o nome for "pro saber", tornar como uma string unica e nao duas
            if(aux3.length > 1 && ((aux3[0] == 'pro' && aux3[1] == 'saber') || (aux3[0] == 'pró' && aux3[1] == 'saber') )){
                aux3 = ['pro saber']
            }
            
            for(let h=0;h<aux3.length; h++){
                
                if(listaFaculdades.indexOf(aux3[h])>-1){
                    //verificar se tem texto de estudante depois 
                    listaFinal += "\n\n"+lista[i];
                    
                    cont =0;  
                }
                if((aux3[h] == 'volta' || aux3[h] == 'voita' || aux3[h] == 'volt' || aux3[h] == 'vinda' ) && (!aux2.includes("vespertino") && !aux2.includes("vesp"))){
                    cont ++;
                    
                    aux = lista[i]
                    if(!isNaN(+aux[0])){
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
            if(!isNaN(+aux[0])){
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
        //let aux3 = (lista[(lista.length)-1].toLowerCase()).trim()

        if(aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("senai") || aux2.includes("senaii") || aux2.includes("pro saber") || aux2.includes("pró saber") || aux2.includes("fat")  ){

            if(i+1<lista.length){
                if(lista[i+1] == ""){
                    console.log("verificando problema ",lista[i])
                    if( ((aux2.includes("volta") || aux2.includes("voita") || aux2.includes("volt") || aux2.includes("vinda")) && (!aux2.includes("vespertino") || !aux2.includes("vesp"))) ){
                        listaFinal +="\n"+lista[i]
                    }
                }
                else{
                    let aux4 = aux2.replace(/[^\w\sÀ-ÿ]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);

                    //quando o nome for "pro saber", tornar como uma string unica e nao duas
                    if(aux4.length > 1 && ((aux4[0] == 'pro' && aux4[1] == 'saber') || (aux4[0] == 'pró' && aux4[1] == 'saber') )){
                        aux4 = ['pro saber']
                    }

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

    return listaFinal
}


function editaListaVespertino(){
    
    let lista: string | null | string[]
    lista = sessionStorage.getItem('lista_bruta');
    if(lista == null){
        return null
    }
    lista = cleanWhiteSpace(lista)
    lista = lista.replace("   ", "\n").split("\n");
    lista[lista.length] = " "
    console.log("LISTAA:   "+lista)
    
    let listaFinal = " ";
    listaFinal += lista[0];
    let cont =0;
    let aux;
    let aux2;
    for (let i=1; i<lista.length; i++){
        aux2 = lista[i].toLowerCase();
        if(((aux2.includes("volta") ||aux2.includes("volt") ||aux2.includes("voita") || aux2.includes("vinda") ) || (aux2.includes("vesp") || aux2.includes("vespertino"))) && (aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat") || aux2.includes("senai") || aux2.includes("senaii") || aux2.includes("pro saber") || aux2.includes("pró saber")  || aux2.includes("fael"))){
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
        if(aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat") || aux2.includes("senai") || aux2.includes("senaii") || aux2.includes("pro saber") || aux2.includes("pró saber") || aux2.includes("fael")){
            let aux3:string | number | string[]
            aux3 = ''
            aux3 = aux2.replace(/[^\w\sÀ-ÿ]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
            console.log(aux3)
            //quando o nome for "pro saber", tornar como uma string unica e nao duas
            if(aux3.length > 1 && ((aux3[0] == 'pro' && aux3[1] == 'saber') || (aux3[0] == 'pró' && aux3[1] == 'saber') )){
                aux3 = ['pro saber']
            }
            for(let h=0;h<aux3.length; h++){
                if(listaFaculdades.indexOf(aux3[h])>-1){
                    listaFinal += "\n\n"+lista[i];
                    console.log(lista[i])
                    cont =0;
                }
                if((aux3[h] == 'vespertino' || aux3[h] == 'vesp' || aux3[h] == 'vesper' || aux3[h] == 'vespertina')&& (aux2.includes("volta") || aux2.includes("voita") || aux2.includes("volt")  || aux2.includes("vinda") )){
                    cont ++;
                    
                    aux = lista[i]
                    
                    if(!isNaN(+aux[0])){
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
            if(!isNaN(+aux[0]) ){
                
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
        //let aux3 = (lista[(lista.length)-1].toLowerCase()).trim()
        console.log(aux2)
        if(aux2.includes("uefs") || aux2.includes("unex") || aux2.includes("unef") || aux2.includes("ufrb") || aux2.includes("unifan") || aux2.includes("acesso") || aux2.includes("unifacs") || aux2.includes("pitagoras") || aux2.includes("pitágoras") || aux2.includes("fan") || aux2.includes("nais") || aux2.includes("npj") || aux2.includes("anhanguera") || aux2.includes("unopar") || aux2.includes("uniasselvi") || aux2.includes("estacio") || aux2.includes("estácio")  || aux2.includes("facs") || aux2.includes("fat") || aux2.includes("senai") || aux2.includes("senaii") || aux2.includes("pro saber") || aux2.includes("pró saber") || aux2.includes("fael") ){
            if(i+1<lista.length){
                if(lista[i+1] == ""){
                    console.log("verificando problema ",lista[i])
                    if( ((aux2.includes("volta") || aux2.includes("voita") || aux2.includes("volt")  || aux2.includes("vinda") ) && (aux2.includes("vespertino") || aux2.includes("vesp"))) ){
                        listaFinal +="\n"+lista[i]
                    }
                }
                else{
                    let aux4 = aux2.replace(/[^\w\sÀ-ÿ]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
                    //quando o nome for "pro saber", tornar como uma string unica e nao duas
                    if(aux4.length > 1 && ((aux4[0] == 'pro' && aux4[1] == 'saber') || (aux4[0] == 'pró' && aux4[1] == 'saber') )){
                        aux4 = ['pro saber']
                    }
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



    console.clear()
    return listaFinal
}




export {tratamentoLista,
        editaListaIda,
        editaListaMatutino,
        editaListaVespertino}