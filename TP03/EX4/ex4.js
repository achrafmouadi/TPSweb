
var n1=parseInt(prompt("entrez nbr 1 "))
var n2=parseInt(prompt("entrez nbr 2 "))

function quarante(a,b){
    if (a==40 || b==40 || a+b==40){
        return true
    }
    else{
        return false
    }
}



alert(quarante(n1,n2))