//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
//depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

let vitorias = 75
let derrotas = 33
let nivelDeVitorias = " "

function calcularSaldoVitorias(vitorias , derrotas){
    return vitorias - derrotas;
}

let saldoVitorias = calcularSaldoVitorias(vitorias, derrotas)

console.log("O saldo de vitórias é " + saldoVitorias )

if(saldoVitorias < 10){
nivelDeVitorias = "Ferro" 
}

else if(saldoVitorias >= 11 && saldoVitorias <=20){
    nivelDeVitorias = "Bronze" 
}

else if(saldoVitorias >= 21 && saldoVitorias<=50){
    nivelDeVitorias = "Prata" 
}

else if(saldoVitorias >= 51 && saldoVitorias<=80){
    nivelDeVitorias = "Ouro" 
}

else if(saldoVitorias >= 81 && saldoVitorias<=90){
    nivelDeVitorias = "Lendário" 
}

else if(saldoVitorias >= 91 && saldoVitorias<=100){
    nivelDeVitorias = "Imortal" 
}

//Saída
console.log("O Herói tem saldo de " + saldoVitorias + " vitórias e está no nível de " + nivelDeVitorias);