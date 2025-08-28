import type { dataForGraphic, ListaSalva } from "../types/types";
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


function getListDate(list: string): string | null | Date{
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


function getAllSavedLists(): ListaSalva[] {
  const todasAsListas: ListaSalva[] = [];
  for (let i = 0; i < 10; i++) {
    const item = localStorage.getItem(`lista_${i}`);
    if (item) {
      try {
        const dadosParseados = JSON.parse(item);
        // Garante que o item tenha a propriedade 'data' para ser considerado válido
        if (dadosParseados.dateActual) {
          todasAsListas.push(dadosParseados);
        }
      } catch (error) {
        console.error(`Erro ao parsear o item do slot lista_${i}:`, error);
      }
    }
  }
  return todasAsListas;
}


function getLatestListBefore(list: string): ListaSalva | null {
    const dataReferenciaFormatada = getListDate(list)

    const todasAsListas = getAllSavedLists();
    console.log(todasAsListas)
    if(dataReferenciaFormatada == null){
        return null
    }
    // 1. Filtra para manter apenas as listas com data ANTERIOR à data de referência
    const listasAnteriores = todasAsListas.filter(
    (lista) => lista.dateList < dataReferenciaFormatada
    );

    // Se não houver nenhuma lista anterior, retorna null
    if (listasAnteriores.length === 0) {
        return null;
    }

    // 2. Ordena as listas restantes em ordem decrescente (a mais recente primeiro)
    listasAnteriores.sort((a, b) => b.dateList.localeCompare(a.dateList));

    // 3. Retorna o primeiro item da lista ordenada, que é a lista mais recente
    return listasAnteriores[0];
}



function getAllListsOrderedByDate(): ListaSalva[] {
  const todasAsListas = getAllSavedLists();
  todasAsListas.sort((b, a) => b.dateList.localeCompare(a.dateList));
  return todasAsListas;
}


function getFormattedDataForGraphic(listDatas: ListaSalva[]): dataForGraphic {
  const formattedData: dataForGraphic = {
    quantIda: [],
    quantVolta: [],
    quantVespertino: [],
    dates: [],
  };

  if (!listDatas) {
    return formattedData;
  }

  listDatas.forEach(lista => {
    formattedData.quantIda.push(lista.quantidades.ida);
    formattedData.quantVolta.push(lista.quantidades.volta);
    formattedData.quantVespertino.push(lista.quantidades.vespertino);

    const dateParts = lista.dateList.split('-');
    const formattedDate = `${dateParts[2]}/${dateParts[1]}`;
    formattedData.dates.push(formattedDate);
  });

  return formattedData;
}


function getSavedListsCount(): number {
  const todasAsListas = getAllSavedLists(); 
  return todasAsListas.length;
}


function seedLocalStorage() {
  console.log("Iniciando o seeding do localStorage...");

  // 1. Limpa os dados antigos para garantir um estado limpo
  localStorage.removeItem('indice_atual');
  for (let i = 0; i < 10; i++) {
    localStorage.removeItem(`lista_${i}`);
  }
  console.log("Dados antigos removidos.");

  // Data final da simulação (último dia em que uma lista foi "salva")
  const dataFinal = new Date('2025-08-22T12:00:00.000Z');

  // 2. Gera 10 entradas, da mais antiga para a mais nova
  for (let i = 0; i < 10; i++) {
    const dataAtual = new Date(dataFinal);
    // Para cada item, voltamos um dia a mais no tempo
    dataAtual.setDate(dataFinal.getDate() - (9 - i)); 

    const dataDaLista = new Date(dataAtual);
    dataDaLista.setDate(dataAtual.getDate() + 1);

    // Gera dados aleatórios para as quantidades
    const ida = Math.floor(Math.random() * 25) + 5; // entre 5 e 29
    const volta = Math.floor(Math.random() * 20) + 5; // entre 5 e 24
    const vespertino = Math.floor(Math.random() * 10); // entre 0 e 9

    // Formata as datas para os formatos corretos
    const dateListStr = dataDaLista.toISOString().split('T')[0]; // "AAAA-MM-DD"
    const dateActualStr = dataAtual.toLocaleDateString('pt-BR'); // "DD/MM/AAAA"
    const diaDaSemana = dataDaLista.toLocaleDateString('pt-BR', { weekday: 'long' });
    const diaMes = dataDaLista.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

    // Cria o objeto de dados da lista
    const dadosDaLista: ListaSalva = {
      dateList: dateListStr,
      quantidades: {
        ida,
        volta,
        vespertino,
        idaVoltaAbsoluto: ida + volta,
        idaVoltaVespertinoAbsoluto: ida + volta + vespertino,
      },
      listaBruta: `Lista ${diaDaSemana} ${diaMes}\n\nUEFS\n1. Passageiro Fictício A (ida)\n2. Passageiro Fictício B (volta)`,
      dateActual: dateActualStr,
    };
    
    // 3. Salva o objeto no localStorage no slot correspondente
    const slotIndex = i;
    localStorage.setItem(`lista_${slotIndex}`, JSON.stringify(dadosDaLista));
    console.log(`Slot lista_${slotIndex} salvo com dados para a data ${dateListStr}`);
  }
  
  // 4. Define o ponteiro 'indice_atual' para o último slot preenchido (que será o 9)
  localStorage.setItem('indice_atual', '9');
  console.log("Ponteiro 'indice_atual' definido como 9.");
  console.log("Seeding concluído com sucesso!");
}


const versionCodeCurrent = "5.3.3"
const keyVersionCode = 'siteVersion'

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
        saveListData,
        getAllSavedLists,
        getLatestListBefore,
        getListDate,
        getAllListsOrderedByDate,
        getFormattedDataForGraphic,
        getSavedListsCount,
        seedLocalStorage,
        getFormattedDate}