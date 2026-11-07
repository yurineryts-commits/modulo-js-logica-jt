const prompt=require("prompt-sync")();



let cem=0;
let cinquenta=0;
let vinte=0;
let dez=0;


let entrada= prompt("Qual o valor: ");
 // entrada=380;

if (entrada>=16) {

console.log("100:",cem=(entrada-entrada%100)/100);
entrada=entrada-(cem*100);
console.log("50:",cinquenta=(entrada-entrada%50)/50);
entrada=entrada-(cinquenta*50);
console.log("20:",vinte=(entrada-entrada%20)/20);
entrada=entrada-(vinte*20);
console.log("10:",dez=(entrada-entrada%10)/10);
entrada=entrada-(dez*10);

}


else if (entra<=15) {


console.log("Valor inválido");

}






// console.log(entrada%20);
// console.log(entrada%10);




// if (entrada/100)





// if (entrada%100<=90 && entrada>=100){

// cem= (entrada- entrada%100) /100;

// console.log("100: ",cem)
// }





// else if( entrada<100 && entrada>=50 ){

// cinquenta=entrada/50
// console.log("50: ",cinquenta)

// }

// else if(entrada<=50){

// vinte=entrada/20
// console.log("20: ",vinte)

// }


// else if(entrada<=20){

// dez=entrada/10
// console.log("10: ",dez)

// }