import { editaListaIda, editaListaMatutino, editaListaVespertino } from "./Edits";

function saveList(list: string){
    sessionStorage.setItem('lista_bruta', list)
}


function getList() {
    const list = sessionStorage.getItem('lista_bruta')
    return list
}


function clearSessionStorage(){
    sessionStorage.clear()
}


function enviarQuantsDaLista(ida:number, volta:number | undefined, vespertino:number | undefined){
    const stringToSend = "\nIdas: "+ ida + "\n"+"Volta: " + volta + "\n"+ "Volta Vespertino: "+ vespertino;
    let conteudo = window.encodeURIComponent(stringToSend);
    let url = "https://api.whatsapp.com/send?text="+"Dados da lista: "+ conteudo;;
    var win = window.open(url, '_blank');
    win?.focus();
}

function enviarListaIda(){
    const lista = editaListaIda()
    if(lista == null){
        return null
    }
    let conteudo = window.encodeURIComponent(lista);
    let url = "https://api.whatsapp.com/send?text="+conteudo;
    var win = window.open(url, '_blank');
    win?.focus();
}

function enviarListaMatutino(){
    const lista = editaListaMatutino()
    if(lista == null){
        return null
    }
    let conteudo = window.encodeURIComponent(lista);
    let url = "https://api.whatsapp.com/send?text="+conteudo;
    var win = window.open(url, '_blank');
    win?.focus();
}


function enviarListaVespertino(){
    const lista = editaListaVespertino()
    if(lista == null){
        return null
    }
    let conteudo = window.encodeURIComponent(lista);
    let url = "https://api.whatsapp.com/send?text="+conteudo;
    var win = window.open(url, '_blank');
    win?.focus();
}


const versionCodeCurrent = "5.0"
const keyVersionCode = 'siteVersion'
function saveVersion(){
    localStorage.setItem(keyVersionCode, versionCodeCurrent)
}

function getAtualVersion(){
    return versionCodeCurrent
}

function getLocalVersion(){
    const runningVersion = localStorage.getItem(keyVersionCode)
    if(runningVersion == null){
        return true
    } else if(runningVersion != versionCodeCurrent){
        return true
    } else{
        return false
    }
}



export {saveList,
        getList,
        clearSessionStorage,
        enviarListaIda,
        enviarListaMatutino,
        enviarListaVespertino,
        enviarQuantsDaLista,
        getAtualVersion,
        saveVersion,
        getLocalVersion}