import { tratamentoLista } from "./Edits";

function quantidadePessoas(){
    let ida = 0
    let volta = 0
    let vespertino = 0
    let idaVoltaVespertinoAbsoluto = 0
    let idaVoltaAbsoluto = 0;
    let lista = tratamentoLista();
    if(lista == null){
        return [0, 0, 0, 0, 0];
    }
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


function quantidadePessoasPontos(){
    let serraria = 0
    let tapera = 0
    let sossego = 0
    let fluminense = 0
    let terraNova = 0
    let cocaCola = 0
    let quadra = 0
    let rodoviaria = 0
    let vilatoide = 0;
    let lista =  tratamentoLista();
    if(lista == null){
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    for (let i=0; i<lista.length; i++){
        if(lista[i] == 'serraria' || lista[i] == 'serrária' || lista[i] == '*serrária'){
            serraria ++;
        } else if( lista[i] == 'tapera'){
            tapera ++;
        } else if(lista[i] == 'sossego'){
            sossego ++;
        } else if(lista[i] == 'fluminense'){
            fluminense ++;
        } else if(lista[i] == 'terra nova' || (lista[i] == 'terra' && lista[i+1] == 'nova')){
            terraNova ++;
        } else if(lista[i] == 'coca' || lista[i] == 'coca cola' || lista[i] == 'coca-cola' || (lista[i] == 'coca' && lista[i+1] == 'cola')){
            cocaCola ++;
        } else if(lista[i] == 'quadra'){
            quadra ++;
        } else if((lista[i] == 'rodovi' && lista[i+1] == 'ria') || lista[i] == 'rodoviária' || lista[i] == 'rodoviaria'){
            rodoviaria ++;
        } else if(lista[i] == 'vilatoide'){
            vilatoide ++;
        }
    }
    let total = serraria + terraNova + tapera + fluminense + sossego 
    return [cocaCola, quadra, rodoviaria, vilatoide, serraria, tapera, sossego, fluminense, terraNova, total]
}




export {quantidadePessoas, quantidadePessoasPontos}