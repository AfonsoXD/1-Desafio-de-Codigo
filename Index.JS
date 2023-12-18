//variaveis
var nomeHeroi = ("Afonso");
var xpHeroi = 10.001;
var nivel = "" ;
 

//comandos de saida
console.log("Olá aventureiro, eu vi que seu nome é "+ nomeHeroi)
console.log("agora irei analisar seu XP")

//laços de repetição
for(xpHeroi = 0 ; xpHeroi <= 1.000; xpHeroi++ ){
    console.log("Você está com pouca XP para ter um ranking!");
    console.log("volte mais tarde quando estiver mais forte!");
    break;
}

//operadores, estruturas de decisão
if (xpHeroi<= 1.000) {
console.log("Seu nivel de XP é Ferro;");
} else if(xpHeroi >= 1.000 && xpHeroi <= 2.000 ) {
    nivel = "Seu nivel de XP é Bronze;"
} else if(xpHeroi >= 2.001 && xpHeroi <=5.000){
     nivel ="Seu nivel de XP é Prata;" 
} else if(xpHeroi >= 6.001 && xpHeroi <= 7.000){
    nivel = "Seu nivel de XP é Ouro;"
} else if(xpHeroi >=7.001 && xpHeroi <=8.000){
    nivel = "Seu nivel de XP é Platina;"
} else if(xpHeroi >=8.001 && xpHeroi <= 9.000){
    nivel = "Seu nivel de XP é Ascendente;"
} else if(xpHeroi >=9.001 && xpHeroi <=10.000){
    nivel = "Seu nivel de XP é Imortal;"
} else if(xpHeroi = 1.0001){
    nivel = "Seu nivel de XP é Radiante;"
}
 

//saida

console.log("Parabens ${nomeHeroi} , ${niveL} ");