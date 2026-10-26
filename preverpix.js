// let saldo=150;
// let valor=150;


// if(saldo>=valor)
//     {

// saldo= saldo - valor;
// console.log("Pix enviado. Saldo: R$", saldo.toFixed(2));

// }else{

//     console.log("Saldo insuficiente");
// }


// // 1. Saldo 

const prompt= require("prompt-sync")();

let saldo= Number(prompt("Quanto de saldo tem na conta?"));
let valor= Number(prompt("Qual o valor do pix:"));
let hora=  22;
let limite= 5000;

if( hora>=20){
    limite=1000;
}

if(valor>limite){
    console.log("Acima do horario")
}

else{

    saldo= saldo-valor;
    console.log("O pix foi realizado, saldo restante é: R$",saldo);
}



