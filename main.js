var listaAtual = [];
var SNv1 = 0;
var SNv2 = 0;
var j = 0;

function grouper(){
    var nomeNovo = document.getElementById("textInput").value;
    listaAtual.push(nomeNovo);
}
function searchName(){
    var name=document.getElementById("textLocalizer").value;
    for(SNv1=0; SNv1<listaAtual.length; SNv1++)
        {
            if(name==listaAtual[SNv1]){
                SNv2=SNv2+1;
            }
        }
        document.getElementById("localizerOutput").innerHTML="Nome Encontrado"+SNv2+"vez(es)";
        console.log("Nome Encontrado "+SNv2+" vez(es)");
        SNv2=0;
    }
function showNames(){
        var novaLista= listaAtual.join("<br>");
        document.getElementById("textOutputs").innerHTML=novaLista;
    }
function sortNames(){
        listaAtual.sort();
        var novaLista= listaAtual.join("<br>");
        document.getElementById("textOutputs").innerHTML=novaLista;
    }
