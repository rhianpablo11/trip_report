import { quantidadePessoas } from "./Calcs";
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


function obterDataHoraFormatada() {
  const agora = new Date();
  const localidade = 'pt-BR';

  const formatoPersonalizado = new Intl.DateTimeFormat(localidade, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Bahia',
  }).format(agora);

  
  return formatoPersonalizado;
}




function sendList(){
    const currentDate = new Date;
    let day: number | string
    day = currentDate.getDate()+1;
    let month: number | string
    month = currentDate.getMonth() +1;
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
    } else if(nameToday == "fri" || nameToday == "sat" || nameToday == "sun"){
        nameTodayPt = "Segunda";
    } 

     let  lista_format = "*Lista* - *"+ nameTodayPt+" - Feira* "+day+"/"+month+"\n\n*UEFS*\n1. \n\n*UNEX*\n1. \n\n*CLÍNICA UNEX*\n1.\n\n*UNEF*\n1. \n\n ";
     let conteudo: string
     conteudo = window.encodeURIComponent(lista_format);
     let url = "https://api.whatsapp.com/send?text="+conteudo;
     var win = window.open(url, '_blank');
     win?.focus();
    
}


function errorReport(){
    let listaErro: string
    listaErro = ''
    if(getList() != null){
        listaErro = '\n'+getList()
        listaErro = window.encodeURIComponent(listaErro)
    }
    let horaDoErro: string
    horaDoErro = obterDataHoraFormatada()
    let textoError: string
    textoError = 'Data em que foi encontrado o erro: \n\n - ' + horaDoErro + '\n\nLista em que foi visto o erro: \n=============================\n' 
    textoError = window.encodeURIComponent(textoError)
    let texto2Error: string
    texto2Error = '\n\n=============================\n\nErro encontrado em: \n-'
    texto2Error = window.encodeURIComponent(texto2Error)
    let url = "https://wa.me/5575992658169?text="+textoError + listaErro + texto2Error;
    var win = window.open(url, '_blank');
    win?.focus();
}


function sendListLikeBoss(){
    const currentDate = new Date;
    //erro nessa parte da data
    let day: number | string
    day = currentDate.getDate()+1;
    let month: number | string
    month = currentDate.getMonth() +1;
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
    } else if(nameToday == "fri" || nameToday == "sat" || nameToday == "sun"){
        nameTodayPt = "Segunda";
    } 

    let conteudo: string
    let rpName: string
    if(nameTodayPt == 'Terça' || nameTodayPt == 'Quinta'){
        rpName = 'Rhian(ida e volta) *quadra*'
    } else if(nameTodayPt == 'Quarta' || nameTodayPt == 'Sexta'){
        rpName = 'Rhian(ida e volta vespertino) *quadra*'
    } else{
        rpName = ' '
    }

    let  lista_format = "*Lista* - *"+ nameTodayPt+" - Feira* "+day+"/"+month+"\n\n*UEFS*\n1. "+rpName+" \n2. \n\n*UNEX*\n1. \n\n*CLÍNICA UNEX*\n1.\n\n*UNEF*\n1. \n\n";
    conteudo = window.encodeURIComponent(lista_format);
    let url = "https://api.whatsapp.com/send?text="+conteudo;
    var win = window.open(url, '_blank');
    win?.focus();
}


const versionCodeCurrent = "5.2.3"
const keyVersionCode = 'siteVersion'
function saveVersion(){
    localStorage.setItem(keyVersionCode, versionCodeCurrent)
}

function getAtualVersion(){
    return versionCodeCurrent
}


function getYearActual() {
  const dataAtual = new Date();
  const ano = dataAtual.getFullYear(); 
  return ano;
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


function saveListData(list: string){
    const dateTomorrow = getDateOfNextDay()
    const dateOfList = getListDate(list)
    if(dateOfList != dateTomorrow){
        console.log('list is already saved')
        return
    }
    const quantList = quantidadePessoas()
    const dataToSave = {
        dateList: dateOfList,
        quantidades: {ida: quantList[0],
                      volta: quantList[1],
                      vespertino: quantList[2],
                      idaVoltaAbsoluto: quantList[3],
                      idaVoltaVespertinoAbsoluto: quantList[4],
        },
        listaBruta: list,
        dateActual: new Date().toLocaleDateString('pt-BR')
    }

    for (let i=0; i<10; i++){
        const key = `lista_${i}`
        const itemSaved = localStorage.getItem(key)
        if(itemSaved){
            const data = JSON.parse(itemSaved)
            if(data.dateList == dateTomorrow){
                console.log('updating list')
                localStorage.setItem(key, JSON.stringify(dataToSave))
                return
            }
        }
    }

    const indiceAtual = getCurrentIndex()
    const newIndice = (indiceAtual + 1 ) % 10
    const newKey = `lista_${newIndice}`

    console.log('Saving new list for tomorrow in slot ' + newKey)
    localStorage.setItem(newKey, JSON.stringify(dataToSave))
    setCurrentIndex(newIndice)
}


function setCurrentIndex(index: number){
    localStorage.setItem('indice_atual', index.toString())
}


function getCurrentIndex():number{
    const index = localStorage.getItem('indice_atual')
    if (index == null){
        return -1
    } 
    return parseInt(index)
}


function getListDate(list: string){
    const list_recorted = list.split(/\r?\n/)
    const line_date = list_recorted[0]
    const regex = /(\d{1,2})\/(\d{1,2})/;
    const match = line_date.match(regex);
    if(match == null){
        return null
    }
    const dia = parseInt(match[1], 10);
    const mes = parseInt(match[2], 10) - 1;
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    let ano = hoje.getFullYear();
    const dataCandidata = new Date(ano, mes, dia);
    dataCandidata.setHours(0, 0, 0, 0);
    if (dataCandidata < hoje) {
        ano++;
    }
    return getFormattedDate(new Date(ano, mes, dia))
}


function getDateOfNextDay(){
    const hoje = new Date()
    const amanha = new Date()
    //verificar isso para evitar passar o dia 30 e 
    amanha.setDate(hoje.getDate() + 1)
    return getFormattedDate(amanha)
}


function getFormattedDate(date: Date): string {
  return date.toISOString().split('T')[0];
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
        getLocalVersion,
        sendList,
        errorReport,
        sendListLikeBoss,
        getYearActual,
        saveListData}