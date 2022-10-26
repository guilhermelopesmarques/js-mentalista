function Chutar(){
   /* let é uma palavra para criar uma variavel*/
   let numeroSecreto = Math.floor(Math.random() * 10) + 1
   console.log(numeroSecreto)
   let chute = document.getElementById("valor").value
   let feliz = '<img src ="imagens/feliz.png"width = "21"   '                          
   if(chute == numeroSecreto){
    /*verdadeiro*/
    document.getElementById("resultado").innerHTML = feliz
}
   else{
   /*falso*/
   document.getElementById("resultado").innerHTML = triste
   }
}
/*inconpleto*/