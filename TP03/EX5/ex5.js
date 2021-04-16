
function somme(tab){
    som=0;
    for (var i=0; i<tab.length; i++){
        som+=tab[i]
    }
    return som
}

let Tab = new Array();
    Tab[0] = parseInt(prompt("entrez element "))
    Tab[1] = parseInt(prompt("entrez element "))
    Tab[2] = parseInt(prompt("entrez element "))

var T = [1,2,3,5,8]
alert(somme(Tab))