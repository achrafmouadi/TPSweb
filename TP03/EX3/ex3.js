function max(a,b,c){
    
    if(a>b && a>c){
    return a}
    else{
       if (b>a && b>c){
       return b}
       else{
       return c}
}
}
alert("le max est "+max(8,19,1))
//qst2)
function somme(a,b){
  if(a===b){
     som=a+b;
     return som*som*som;
}
}
alert("la somme est "+somme(2,2))