
const prompt=require("prompt-sync")();



let N1= prompt("Digite o primeiro número:");
let N2= prompt("Digite o segundo número:");
let N3= prompt("Digite o terceiro número:");

if (N1>N2 && N1>N3) {

 console.log("O maior número é: " , N1 );
}

if (N2>N1 && N2>N3) {

 console.log("O maior número é: " , N2 );
}

if (N3>N1 && N3>N2) {

 console.log("O maior número é:" , N3 );
}








