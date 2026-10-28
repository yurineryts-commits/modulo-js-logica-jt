

// //CÓDIGO BASE
// const Valor_base=5;
// const valor_min=0.5;
// const valor_km=2;

// let km_percorrido=8;
// let tempo_viagem=20;


// let Total_corrida= Valor_base + km_percorrido * valor_km + valor_min * tempo_viagem

// console.log("o valor da variavel é: " +  "R$" +  Total_corrida.toFixed(2) )

// TESTE 1

// const Valor_base=5;
// const valor_min=0.5555;
// const valor_km=2;

// let km_percorrido=8;
// let tempo_viagem=20;


// let Total_corrida= Valor_base + km_percorrido * valor_km + valor_min * tempo_viagem

// console.log("o valor da variavel é: " +  "R$" +  Total_corrida.toFixed(2) )

// RESULTADO TESTE 1 : Alterar o valor do minuto  para um valor com mais que  3 casas decimais, 
// o valor apresentado é diferente. Por exmplo: com  0.55 o valor total é 32 , com 0.5555 fica 32,11

// TESTE 2

// const Valor_base=5;
// const valor_min=0.50;
// const valor_km=2;

// let km_percorrido=8;
// let tempo_viagem=20;

// const Valor_base= km_percorrido*tempo_viagem

// console.log(Valor_base)

//RESULTADO TESTE 2:  Ao tentar alterar o valor de uma variavel const usando a multiplicação de duas variavies let o terminal 
//apresentou o erro "SyntaxError: Identifier 'Valor_base' has already been declared

//TESTE 4
// const Valor_base=5;
// const valor_min=0.5;
// const valor_km=2;

// let km_percorrido=3;
// let tempo_viagem=45;
// let Total_corrida= Valor_base + km_percorrido * valor_km + valor_min * tempo_viagem

// console.log(Total_corrida)

//RESULTADO TESTE 4: Resultado deu 33.5

// Desafio

const prompt = require("prompt-sync")();

let km= Number(prompt("Quantos Km?"));
console.log(km*2);
console.log(km+5);

console.log(typeof km);




