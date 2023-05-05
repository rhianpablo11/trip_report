<script>
        
function stringTratament(){
    
    let listaTransporte = String(prompt("Digite a lista do dia: ")).toLowerCase()
    let ida =0;
    let volta =0;
    let vespertino = 0;
    
    let cont=0;
    
    
    
    listaTratada= listaTransporte.replace(/[^\w\s]+/gu, ' ').split(/\s*\.\s*|\s+/).filter(Boolean);
    
    for(let i=0; i<listaTratada.length; i++){
        if(listaTratada[i]=="ida"){
            ida++
        }
        else if(listaTratada[i]=="volta"){
            volta++
        }
        else if(listaTratada[i]=="vespertino"){
            vespertino++
        }
    }
    volta -= vespertino;
    
    alert("Idas: "+ ida + "\nVolta: " + volta + "\nVolta Vespertino: "+vespertino);

    return listaTransporte;
}
stringTratament();
</script>